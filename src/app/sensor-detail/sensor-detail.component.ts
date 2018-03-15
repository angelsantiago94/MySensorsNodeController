import { Component, OnInit } from '@angular/core';
import { SensorService} from '../sensor.service';

@Component({
  selector: 'sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css'],
  inputs: ['sensor'],
  providers: [ SensorService]
})
export class SensorDetailComponent implements OnInit {

  sensor: any;
  private editNombre: Boolean = false;

  constructor(private _sensorService: SensorService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editNombre = false;
  }

  onEditClick(){
    this.editNombre = true;
  }

  onEditNombre(){
    console.log(this.sensor);
    this._sensorService.updateNombreSensores(this.sensor.nombre).subscribe(resSensorData => console.log("exito"));
  }
}
