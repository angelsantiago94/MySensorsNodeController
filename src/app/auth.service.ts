import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken: any;
  usuario: any;

  constructor(private http: Http) { }

  registroUsuario(usuario) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/registro', usuario, {headers: headers})
    .map(res => res.json());
  }

  loginUsuario(usuario){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/login', usuario, {headers: headers})
    .map(res => res.json());
  }

}
