import { AuthService } from './../auth.service';
import { Tarea } from './../tarea';
import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
  inputs: ['tarea']
})
export class TareaComponent implements OnInit {

  constructor(private authService: AuthService) { }
  nombreDestinatario: String;
  tarea: Tarea;
  ngOnInit() {
    console.log(this.tarea.Destinatario);
    this.authService.getUsuarioID(this.tarea.Destinatario).subscribe(respuesta => {this.nombreDestinatario=respuesta[0].nombreUsuario; console.log(respuesta)});
  }

}
