import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    NavbarComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    FooterComponent,
    BannerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
