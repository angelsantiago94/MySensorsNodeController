import { Usuario } from './../usuario';
import { TareasService } from './../tareas.service';
import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Tarea} from '../tarea';
import { AuthService } from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as $ from 'jquery';
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
  usuario: Usuario;
  destinatarios: Array<Usuario>;
  destinatario: Usuario;
  usuarioDefault: Usuario = {nombreUsuario:"Seleccione un usuario",email : null,password: null,role: null};
  constructor( private authService: AuthService,dialogService: DialogService,private tareaService: TareasService, private flashMessagesService: FlashMessagesService) {
    super(dialogService);
  }
  ngOnInit(){
    this.authService.getUsuarios().subscribe(respuesta => { this.destinatarios = respuesta;this.destinatarios.push(this.usuarioDefault); } );
    //this.destinatarios.push(this.usuarioDefault);
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code
    //console.log(this.destinatario);
    let valido: boolean = true;
    $(".invalid-feedback").hide();
    $(".invalid-input").removeClass("invalid-input");
    //validacion formulario
    if(this.nombreTarea == "" || this.nombreTarea == null || this.nombreTarea === undefined){
      $("#error-nombre-tarea").show();
      $("#nombreTarea").addClass("invalid-input");
      valido = false;
    }

    if(this.descripcionTarea == "" || this.descripcionTarea == null || this.descripcionTarea === undefined){
      $("#error-descripcion-tarea").show();
      $("#descripcionTarea").addClass("invalid-input");
      valido = false;
    }

    if( this.destinatario==this.usuarioDefault || this.destinatario === undefined){
      $("#error-destinatario-tarea").show();
      $("#destinatarioTarea").addClass("invalid-input");
      valido = false;
    }
    


    if(valido){
    this.tareaService.postTarea({titulo: this.nombreTarea,descripcion:this.descripcionTarea, Creador:this.usuario, Destinatario: this.destinatario}).subscribe(respuesta => console.log(respuesta));
    this.result = true;
    this.flashMessagesService.show('Tarea añadida', {cssClass: 'alert-success', timeout: 3000});
    this.close();
    }
  }

}
