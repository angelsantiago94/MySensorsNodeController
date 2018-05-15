import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { SensorDetailComponent } from './sensor-detail/sensor-detail.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TareaComponent } from './tarea/tarea.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from 'ng2-bootstrap-card/ng2-bootstrap-card';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://nodehome.ddns.net:3000', options: {} };

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
    PerfilComponent,
    SensorListComponent,
    SensorDetailComponent,
    ListaTareasComponent,
    TareaComponent,
    ModalComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AceEditorModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    NgbModule.forRoot(),
    BootstrapModalModule.forRoot({container:document.body}),
    SocketIoModule.forRoot(config)
  ],
  entryComponents: [ModalComponent],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
