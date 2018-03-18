import { Component, OnInit } from '@angular/core';
import { Tarea} from './../tarea';
import { TareasService } from '../tareas.service';


@Component({
  selector: 'lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
  inputs: ['usuario'],
  providers: [ TareasService]
})
export class ListaTareasComponent implements OnInit {

  tareas: Array<Tarea>;
  usuario: any;
  constructor(private _tareaService: TareasService) { }

  ngOnInit() {
    this._tareaService.getTareas(this.usuario).subscribe(resSensorData => this.tareas = resSensorData);
  }

}
