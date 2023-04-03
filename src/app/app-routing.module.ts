import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/Pagina-Main/inicio/inicio.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './Components/Error/error.component';

/* ruteo las distintas paginas para que reaccionen segun lo requerido*/

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
