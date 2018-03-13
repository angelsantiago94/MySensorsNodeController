import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.css'],
  inputs: ['sensor']
})
export class SensorDetailComponent implements OnInit {

  private editNombre: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editNombre = false;
  }

  onEditClick(){
    this.editNombre = true;
  }
}
