import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
  inputs: ['tarea']
})
export class TareaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
