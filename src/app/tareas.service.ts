import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class TareasService {

  private _getUrl = "http://nodehome.ddns.net:3000/api/tareas/recibidas/";
  private _postUrl = "http://nodehome.ddns.net:3000/api/tareas/";
  constructor( private _http: Http) { }

  getTareas(usuario){
    return this._http.get(this._getUrl+usuario).map((response:Response) => response.json());
  }

  postTarea(tarea) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.put(this._postUrl, {tarea},  {headers: headers}).map((response:Response) => response.json());
  }

}
