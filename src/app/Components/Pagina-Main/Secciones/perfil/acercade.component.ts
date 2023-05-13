import { Component, OnInit } from '@angular/core';
import { PersonaPerfil } from 'src/assets/Modelos/PersonaPerfilModel';
import { PersonaPerfilService } from 'src/assets/services/portfolio/persona-perfil.service';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service'; /* importo Login service para poder hacer uso de sus funciones */


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
  constructor(
    public loginService:LoginServiceService,
    private personaperfilServices: PersonaPerfilService){ 
  }

  onEdition:boolean=false; /* los botones estan ocultos por defecto (en todas las secciones) */
  personasperfil: PersonaPerfil[] = [];


  ngOnInit(){ /*actualiza la propiedad onEdition del componente cada vez que el valor del observable cambia */
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta})
    this.onGet();
  }

  onGet(){
    this.personaperfilServices.getPersonaPerfil().subscribe(data =>{this.personasperfil=data});
  }
}
