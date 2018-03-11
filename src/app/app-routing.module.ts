import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoComponent } from './contenido/contenido.component';
import { HomeComponent } from './home/home.component';
import {RegistroComponent} from './registro/registro.component';
import {LoginComponent} from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'contenido', component: ContenidoComponent, canActivate: [AuthGuard]},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
