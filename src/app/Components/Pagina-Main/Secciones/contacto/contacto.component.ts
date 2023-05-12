import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(public loginService:LoginServiceService){ 
  }
  onEdition:boolean=false;

  ngOnInit(){
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta})
  }

}
