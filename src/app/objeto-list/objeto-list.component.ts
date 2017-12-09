import { Component, OnInit, EventEmitter } from '@angular/core';
import { Objeto } from '../objeto';

@Component({
  selector: 'objeto-list',
  templateUrl: './objeto-list.component.html',
  styleUrls: ['./objeto-list.component.css'],
  inputs: ['objetos'],
  outputs: ['SelectObjeto']
})
export class ObjetoListComponent implements OnInit {

  public SelectObjeto = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(objeto:Objeto){
    this.SelectObjeto.emit(objeto);
  }

}
