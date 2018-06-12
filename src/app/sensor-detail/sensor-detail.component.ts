import { Sensor } from './../sensor';
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

  
  tipos:String[] = [
		"V_TEMP", "V_HUM", "V_STATUS", "V_PERCENTAGE", "V_PRESSURE", "V_FORECAST", "V_RAIN",
		"V_RAINRATE", "V_WIND", "V_GUST", "V_DIRECTION", "V_UV", "V_WEIGHT", "V_DISTANCE",
		"V_IMPEDANCE", "V_ARMED", "V_TRIPPED", "V_WATT", "V_KWH", "V_SCENE_ON", "V_SCENE_OFF",
		"V_HVAC_FLOW_STATE", "V_HVAC_SPEED", "V_LIGHT_LEVEL", "V_VAR1", "V_VAR2", "V_VAR3",
		"V_VAR4", "V_VAR5", "V_UP", "V_DOWN", "V_STOP", "V_IR_SEND", "V_IR_RECEIVE", "V_FLOW",
		"V_VOLUME", "V_LOCK_STATUS", "V_LEVEL", "V_VOLTAGE", "V_CURRENT", "V_RGB", "V_RGBW",
		"V_ID", "V_UNIT_PREFIX", "V_HVAC_SETPOINT_COOL", "V_HVAC_SETPOINT_HEAT", "V_HVAC_FLOW_MODE"
	];
  sensor: Sensor;
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
    this._sensorService.updateNombreSensores(this.sensor._id, this.sensor.nombre).subscribe(resSensorData => { this.sensor = resSensorData;
      this.editNombre = false; } );
  }

  onApagar(){
    console.log("Apagando");

    this._sensorService.sendMensaje({destination: '255', sensor: this.sensor.id, command: 1,type: this.sensor.type, payload:'0' }).subscribe(resSensorData => { 
      console.log(resSensorData);
      if(resSensorData.codigoRespuesta=="OK"){
        this.sensor.value=0;
      }
     } );
  }

  onEncender(){
    console.log("Encendiendo");
    this._sensorService.sendMensaje({destination: 5, sensor: this.sensor.id, command: 1,type: this.sensor.type, payload:'1' }).subscribe(resSensorData => { 
      console.log(resSensorData);
      if(resSensorData.codigoRespuesta=="OK"){
        this.sensor.value=1;
      }
     } );
  }
  
  onIRSend(){
    console.log("irsend");
    this._sensorService.sendMensaje({destination: 7, sensor: this.sensor.id, command: 1,type: this.sensor.type, payload:'1' }).subscribe(resSensorData => { 
      console.log(resSensorData);
      if(resSensorData.codigoRespuesta=="OK"){
        this.sensor.value=1;
      }
     } );
  }
}
