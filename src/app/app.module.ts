import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ObjetoListComponent } from './objeto-list/objeto-list.component';
import { ObjetoDetalleComponent } from './objeto-detalle/objeto-detalle.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContenidoComponent,
    ObjetoListComponent,
    ObjetoDetalleComponent,
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
