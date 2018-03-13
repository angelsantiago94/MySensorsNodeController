import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class SensorService {

  private _getUrl = "http://nodehome.ddns.net:3000/api/sensores";
  constructor( private _http: Http) { }

  getSensores(){
    return this._http.get(this._getUrl).map((response:Response) => response.json());
  }

}
