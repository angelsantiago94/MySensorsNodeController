import { Injectable } from '@angular/core';
import { Http, Response , Headers} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class SensorService {

  private _getUrl = "http://nodehome.ddns.net:1856/api/sensores";
  private _putUrl = "http://nodehome.ddns.net:1856/api/sensores/setNombre/";

  private _mensajesUrl = "http://nodehome.ddns.net:1856/mysensors/sendMensaje/";
  constructor( private _http: Http) { }

  getSensores(){
    return this._http.get(this._getUrl).map((response:Response) => response.json());
  }

  updateNombreSensores(id: String, nombre) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.put(this._putUrl+id, {nombre: nombre},  {headers: headers}).map((response:Response) => response.json());
  }

  sendMensaje(mensaje){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post(this._mensajesUrl, mensaje, {headers: headers})
    .map(res => res.json());
  }

}
