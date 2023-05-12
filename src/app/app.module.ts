import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /* importo forms de angular*/

import { AppComponent } from './app.component';
import { ErrorComponent } from './Components/Error/error.component';

import { InicioComponent } from './Components/Pagina-Main/inicio/inicio.component';
import { NavbarComponent } from './Components/Pagina-Main/Secciones/navbar/navbar.component';
import { LoginComponent } from './Components/Pagina-Main/Secciones/navbar/login/login.component';
import { AcercadeComponent } from './Components/Pagina-Main/Secciones/perfil/acercade.component';
import { ExperienciaComponent } from './Components/Pagina-Main/Secciones/experiencias/experiencia.component';
import { HabilidadesComponent } from './Components/Pagina-Main/Secciones/habilidades/habilidades.component';
import { ProyectosComponent } from './Components/Pagina-Main/Secciones/proyectos/proyectos.component';
import { ContactoComponent } from './Components/Pagina-Main/Secciones/contacto/contacto.component';
import { FooterComponent } from './Components/Pagina-Main/Secciones/footer/footer.component';


import { LoginServiceService } from '../assets/services/servicio/login-service.service';








@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    
    InicioComponent,
    NavbarComponent,
    LoginComponent,
    AcercadeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, /*formcontrol - formgroup*/
  ],

  providers: [LoginServiceService],
  bootstrap: [AppComponent]

})
export class AppModule { }
