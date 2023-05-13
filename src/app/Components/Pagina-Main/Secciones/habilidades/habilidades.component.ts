import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/assets/Modelos/HabilidadesModel';
import { HabilidadesService } from 'src/assets/services/portfolio/habilidades.service';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  constructor(
    public loginService:LoginServiceService,
    private habilidadesServices: HabilidadesService){ 
  }

  onEdition:boolean=false;
  habilidades: Habilidades [] = [];


  ngOnInit(){
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta})
    this.onGet();
  }

  onGet(){
    this.habilidadesServices.getHabilidades().subscribe(data =>{this.habilidades=data});
  }
}
