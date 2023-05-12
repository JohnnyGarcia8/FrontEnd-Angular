import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service'; /* importo Login service para poder hacer uso de sus funciones */

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
  constructor(public loginService:LoginServiceService){ 
  }
  onEdition:boolean=false; /* los botones estan ocultos por defecto (en todas las secciones) */

  ngOnInit(){ /*actualiza la propiedad onEdition del componente cada vez que el valor del observable cambia */
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta})
  }

}
