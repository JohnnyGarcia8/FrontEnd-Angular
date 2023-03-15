import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';


import { NavbarComponent } from './navbar/navbar.component';
import { AcercadeComponent } from './Secciones/acercade/acercade.component';
import { ExperienciaComponent } from './Secciones/experiencia/experiencia.component';
import { EducacionComponent } from './Secciones/educacion/educacion.component';
import { HabilidadesComponent } from './Secciones/habilidades/habilidades.component';
import { ProyectosComponent } from './Secciones/proyectos/proyectos.component';
import { FooterComponent } from './Secciones/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';







@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent,
    ErrorComponent,
    
    
    NavbarComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    BannerComponent,
    PerfilComponent,
    LoginComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
