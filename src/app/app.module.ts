import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

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


import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { DhNavbarComponent } from './Components/Dashboard/Dh-secciones/dh-navbar/dh-navbar.component';
import { DhBannerComponent } from './Components/Dashboard/Dh-secciones/dh-banner/dh-banner.component';
import { DhPerfilComponent } from './Components/Dashboard/Dh-secciones/dh-perfil/dh-perfil.component';
import { DhExperienciasComponent } from './Components/Dashboard/Dh-secciones/dh-experiencias/dh-experiencias.component';
import { DhHabilidadesComponent } from './Components/Dashboard/Dh-secciones/dh-habilidades/dh-habilidades.component';
import { DhProyectosComponent } from './Components/Dashboard/Dh-secciones/dh-proyectos/dh-proyectos.component';
import { DhContactoComponent } from './Components/Dashboard/Dh-secciones/dh-contacto/dh-contacto.component';
import { DhFooterComponent } from './Components/Dashboard/Dh-secciones/dh-footer/dh-footer.component';







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
  
    DashboardComponent,
    DhNavbarComponent,
    DhBannerComponent,
    DhPerfilComponent,
    DhExperienciasComponent,
    DhHabilidadesComponent,
    DhProyectosComponent,
    DhContactoComponent,
    DhFooterComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
