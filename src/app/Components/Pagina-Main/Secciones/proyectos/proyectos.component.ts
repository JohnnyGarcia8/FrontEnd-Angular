import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/assets/Modelos/ProyectosModel';
import { ProyectosService } from 'src/assets/services/portfolio/proyectos.service';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(
    public loginService:LoginServiceService,
    private proyectosServices: ProyectosService){ 
  }

  onEdition:boolean=false;
  proyectos: Proyectos[] = [];


  ngOnInit(){
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta})
    this.onGet();
  }

  onGet(){
    this.proyectosServices.getProyectos().subscribe(data =>{this.proyectos=data});
  }
}
