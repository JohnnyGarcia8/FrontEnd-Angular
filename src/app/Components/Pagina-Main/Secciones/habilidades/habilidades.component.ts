import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  constructor(public loginService:LoginServiceService){ 
  }
  onEdition:boolean=false;

  ngOnInit(){
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta})
  }

}
