import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  nombreTarea: string;
  descripcionTarea: string;
  usuario: Object;
  destinatarios: [Object];
}

@Component({
  selector: 'formulario-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  title: string;
  nombreTarea: string;
  descripcionTarea: string;
  usuario: Object;
  destinatarios: [Object];
  destinatario: Object;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }

}
