import { Injectable } from '@angular/core';
import { Http,Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  usuario: any;

  constructor(private http: Http) { }

  registroUsuario(usuario) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://nodehome.ddns.net:3000/api/registro', usuario, {headers: headers})
    .map(res => res.json());
  }

  loginUsuario(usuario){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://nodehome.ddns.net:3000/api/login', usuario, {headers: headers})
    .map(res => res.json());
  }

  storeUserData(token, usuario){
    localStorage.setItem('id-token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.authToken = token;
    this.usuario = usuario;
  }

  logout(){
    this.authToken = null;
    this.usuario = null;
    localStorage.clear();
  }

  getPerfil() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://nodehome.ddns.net:3000/api/perfil', {headers: headers})
    .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id-token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id-token');
  }

  getUsuarios() {
    return this.http.get('http://nodehome.ddns.net:3000/api/usuarios')
    .map((response: Response) => response.json());
  }
  getUsuarioID(id) {
    return this.http.get('http://nodehome.ddns.net:3000/api/usuarios/'+id)
    .map((response: Response) => response.json());
  }

}
