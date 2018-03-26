import { TareasService } from './../tareas.service';
import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Tarea} from '../tarea';
import { AuthService } from '../auth.service';
export interface ConfirmModel {
  title:string;
  nombreTarea: string;
  descripcionTarea: string;
  usuario: Object;
  destinatarios: Array<Object>;
}

@Component({
  selector: 'formulario-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [AuthService, TareasService]
})
export class ModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  title: string;
  nombreTarea: string;
  descripcionTarea: string;
  usuario: Object;
  destinatarios: Array<Object>;
  destinatario: Object;
  constructor( private authService: AuthService,dialogService: DialogService,private tareaService: TareasService) {
    super(dialogService);
  }
  ngOnInit(){
    this.authService.getUsuarios().subscribe(respuesta => { this.destinatarios = respuesta;this.destinatarios.push({nombreUsuario:"Seleccione un usuario"}); } );
    this.destinatarios.push({nombreUsuario:"Seleccione un usuario"});
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code
    //console.log(this.destinatario);
    this.tareaService.postTarea({titulo: this.nombreTarea,descripcion:this.descripcionTarea, Creador:this.usuario, Destinatario: this.destinatario}).subscribe(respuesta => console.log(respuesta));
    this.result = true;
    this.close();
  }

}
