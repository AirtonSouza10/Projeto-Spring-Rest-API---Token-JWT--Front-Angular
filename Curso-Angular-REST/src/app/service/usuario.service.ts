import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getUsuarioList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }


  getProfissaoList(): Observable<any> {
    return this.http.get<any>(AppConstants.getBaseUrlPath + 'profissao/');
  }


  getUsuarioListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina);
  }

  getUsuario(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  deletarUsuario(id: Number): Observable<any> {

    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });

  }

  consultarUser(nome: String): Observable<any> {

    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }

  consultarUserporPage(nome: String, page: Number): Observable<any> {

    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome + "/page/" + page);
  }


  salvarUsuario(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user);
  }

  updateUsuario(user): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user);
  }

  removerTelefone(id): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + "removerTelefone/" + id, { responseType: 'text' });
  }


  userAuteticado() {
    if (localStorage.getItem('token') !== null
      && localStorage.getItem('token').toString().trim() !== null) {
      return true;
    } else {
      return false;
    }
  }

}
