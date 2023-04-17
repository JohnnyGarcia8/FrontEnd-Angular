import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicio/login-service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  constructor(public loginService:LoginServiceService){ 
  }
  onEdition:boolean=false;

  ngOnInit(){
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta})
  }


}
