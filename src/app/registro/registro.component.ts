import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../validate.service';
import {AuthService} from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombreUsuario: String;
  email: String;
  password: String;
  
  constructor(private validateService: ValidateService, private _flashMessagesService: FlashMessagesService, 
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registroSubmit() {
    const usuario = {
      nombreUsuario: this.nombreUsuario,
      email: this.email,
      password: this.password
    };

    if(!this.validateService.validarRegistro(usuario)){
      console.log("Debes rellenar todos los campos");
      this._flashMessagesService.show("Debes rellenar todos los campos",{ cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    if (!this.validateService.validarEmail(usuario.email)){
      console.log("Email no valido");
      this._flashMessagesService.show("Email no valido",{ cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    this.authService.registroUsuario(usuario).subscribe(data => {
      if(data.success) {
        this._flashMessagesService.show("Se ha registrado con exito", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
      }else {
        this._flashMessagesService.show("No se ha podido registrar con exito", { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/registro']);
      }
    });
  }

}
