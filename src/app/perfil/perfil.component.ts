import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AuthService]
})
export class PerfilComponent implements OnInit {

  closeResult: string;
  usuario: Object;
  destinatarios: Array<Object>;
  constructor( private authService: AuthService, private router: Router, private dialogService: DialogService) { }
  ngOnInit() {
    this.authService.getPerfil().subscribe(perfil => {
      this.usuario = perfil.usuario;
    }, err => {
      console.log(err);
      return false;
    });
    this.authService.getUsuarios().subscribe(respuesta => { this.destinatarios = respuesta; } );
  }
  showConfirm() {
    let disposable = this.dialogService.addDialog(ModalComponent, {
        title:'Nueva Tarea', usuario: this.usuario, destinatarios: this.destinatarios })
        .subscribe((isConfirmed)=> {
            //We get dialog result
            if(isConfirmed) {
                
            }
        });
    
}

}
