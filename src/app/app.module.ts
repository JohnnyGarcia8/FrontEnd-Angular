import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './Components/Inicio/inicio.component';
import { ErrorComponent } from './Components/Error/error.component';


import { NavbarComponent } from './Components/navbar/navbar.component';
import { AcercadeComponent } from './Components/Secciones/perfil/acercade.component';
import { ExperienciaComponent } from './Components/Secciones/experiencias/experiencia.component';
import { HabilidadesComponent } from './Components/Secciones/habilidades/habilidades.component';
import { ProyectosComponent } from './Components/Secciones/proyectos/proyectos.component';
import { FooterComponent } from './Components/Secciones/footer/footer.component';
import { BannerComponent } from './Components/banner/banner.component';
import { LoginComponent } from './Components/navbar/login/login.component';
import { ContactoComponent } from './Components/Secciones/contacto/contacto.component';







@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,

    ErrorComponent,
    
    
    NavbarComponent,
    AcercadeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    BannerComponent,
    LoginComponent,
    ContactoComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
