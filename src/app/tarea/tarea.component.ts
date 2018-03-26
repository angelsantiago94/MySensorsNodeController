import { Tarea } from './../tarea';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
  inputs: ['tarea']
})
export class TareaComponent implements OnInit {

  constructor() { }
  tarea: Tarea;
  ngOnInit() {
    console.log(this.tarea.Destinatario);
  }

}
