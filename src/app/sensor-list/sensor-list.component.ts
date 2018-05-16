import { Socket } from 'ngx-socket-io';
import { Component, OnInit } from '@angular/core';
import { Sensor} from './../sensor';
import { SensorService } from '../sensor.service';

import { SocketService } from '../socket.service';

@Component({
  selector: 'sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css'],
  providers: [ SensorService,SocketService]
})
export class SensorListComponent implements OnInit {

  sensores: Array<Sensor>;
  
  

  constructor(private _sensorService: SensorService, private socket: SocketService) {
      this.socket.socket.on('sensor-update',()=>{
        this.sensores = [];
        this._sensorService.getSensores().subscribe(resSensorData => this.sensores = resSensorData);
      });

   }

  ngOnInit() {
    this._sensorService.getSensores().subscribe(resSensorData => this.sensores = resSensorData);
  
  }

}
