import { Component, OnInit } from '@angular/core';
import { Objeto } from '../objeto';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  objetos: Objeto[] = [
    {"_id": "1" , "nombre": "objeto1", "descripcion": "descripcion1" },
    {"_id": "2", "nombre": "objeto2", "descripcion": "descripcion2" },
    {"_id": "3", "nombre": "objeto3", "descripcion": "descripcion3" }
  ];

  selectedObjeto:Objeto;

  constructor() { }

  ngOnInit() {
  }

  onSelectedObjeto(objeto:any){
    this.selectedObjeto=objeto;
    console.log(this.selectedObjeto);
  }

}
