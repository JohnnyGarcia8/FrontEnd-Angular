import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';



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
