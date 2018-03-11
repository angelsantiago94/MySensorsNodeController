import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Object;
  constructor( private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.authService.getPerfil().subscribe(perfil => {
      this.usuario = perfil.usuario;
    }, err => {
      console.log(err);
      return false;
    });
  }

}
