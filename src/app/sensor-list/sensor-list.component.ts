import { Component, OnInit } from '@angular/core';
import { Sensor} from './../sensor';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css'],
  providers: [ SensorService]
})
export class SensorListComponent implements OnInit {

  sensores: Array<Sensor>;
  
  constructor(private _sensorService: SensorService) { }

  ngOnInit() {
    this._sensorService.getSensores().subscribe(resSensorData => this.sensores = resSensorData);
  }

}
