import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UserChart } from 'src/app/model/UserChart';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  userChart = new UserChart();

  ngOnInit() {
    this.usuarioService.carregarGrafico().subscribe(data => {
      this.userChart = data;

      //nomes
      this.barChartLabels = this.userChart.nome.split(',');
      //salario
      var arraySalario = JSON.parse('[' + this.userChart.salario + ']')

      this.barChartData = [
        { data: arraySalario, label: 'Salario usuario' }
      ];

    });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [], label: 'Salario usuario' }
  ];

}
