import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombreUsuario: String;
  password: String;
  
  constructor( private _flashMessagesService: FlashMessagesService, 
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginSubmit() {
    const usuario = {
      nombreUsuario: this.nombreUsuario,
      password: this.password
    };

    this.authService.loginUsuario(usuario).subscribe(data =>{
      if(data.success) {

      }else{
        
      }
    });
  }

}
