import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Array<User[]>;
  nome: String;
  total: Number;

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit() {
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });

  }

  deleteUsuario(id: Number, index) {

    if (confirm('Deseja mesmo remover?')) {

      this.usuarioService.deletarUsuario(id).subscribe(data => {
        // console.log("Retorno do método delete: " + data);

        this.usuarios.splice(index, 1);//remove da tela o item excluido

        // this.usuarioService.getUsuarioList().subscribe(data => {
        //  this.usuarios = data;
        // });

      });

    }
  }

  consultarUser() {

    if (this.nome === '') {
      this.usuarioService.getUsuarioList().subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    } else {

      this.usuarioService.consultarUser(this.nome).subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });

    }
  }

  carregarPagina(pagina) {

    if (this.nome !== '') {
      this.usuarioService.consultarUserporPage(this.nome, (pagina - 1)).subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    } else {
      this.usuarioService.getUsuarioListPage(pagina - 1).subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });

    }

  }

}
