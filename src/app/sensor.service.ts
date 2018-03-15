import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class SensorService {

  private _getUrl = "http://nodehome.ddns.net:3000/api/sensores";
  private _getPut = "http://nodehome.ddns.net:3000/api/sensores/setNombre";
  constructor( private _http: Http) { }

  getSensores(){
    return this._http.get(this._getUrl).map((response:Response) => response.json());
  }

  updateNombreSensores(nombre: String) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.put(this._getUrl, nombre,  {headers: headers}).map((response:Response) => response.json());
  }

}
