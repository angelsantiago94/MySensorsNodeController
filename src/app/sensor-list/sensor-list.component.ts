import { Component, OnInit } from '@angular/core';
import { Sensor} from './../sensor';
import { SensorService } from '../sensor.service';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css'],
  providers: [ SensorService]
})
export class SensorListComponent implements OnInit {

  sensores: Array<Sensor>;
  
  constructor(private _sensorService: SensorService, private socket: Socket) { }

  ngOnInit() {
    this._sensorService.getSensores().subscribe(resSensorData => this.sensores = resSensorData);
    this.socket.on("sensor-update", function(){
      this._sensorService.getSensores().subscribe(resSensorData => this.sensores = resSensorData);
    })
  }

}
