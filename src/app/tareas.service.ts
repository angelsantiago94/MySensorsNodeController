import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class TareasService {

  private _getUrl = "http://nodehome.ddns.net:1856/api/tareas/recibidas/";
  private _postUrl = "http://nodehome.ddns.net:1856/api/tareas/insertar";
  constructor( private _http: Http) { }

  getTareas(usuario){
    return this._http.get(this._getUrl+usuario).map((response:Response) => response.json());
  }

  postTarea(tarea) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this._postUrl, tarea,  {headers: headers}).map((response:Response) => response.json());
  }

}
