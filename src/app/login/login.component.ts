import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  
  constructor( private flashMessagesService: FlashMessagesService, 
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginSubmit() {
    const usuario = {
      email: this.email,
      password: this.password
    };

    this.authService.loginUsuario(usuario).subscribe(data =>{
      console.log(data);
      if(data.success) {
        this.authService.storeUserData(data.token,data.usuario);
        this.flashMessagesService.show('Inicio de sesión con exito', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/home']);
      }else{
        this.flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
      }
    });
  }

}
