import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ObjetoListComponent } from './objeto-list/objeto-list.component';
import { ObjetoDetalleComponent } from './objeto-detalle/objeto-detalle.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ValidateService} from './validate.service';
import {AuthService} from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AuthGuard } from './auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContenidoComponent,
    ObjetoListComponent,
    ObjetoDetalleComponent,
    RegistroComponent,
    LoginComponent,
    NavbarComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceEditorModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
