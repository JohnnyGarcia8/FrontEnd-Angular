import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/Inicio/inicio.component';

import { ErrorComponent } from './Components/Error/error.component';



const routes: Routes = [
  {path: '', component:InicioComponent},
 /* {path:'dashboard', component:DashboardComponent},*/
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
