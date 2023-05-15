import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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


  miFormulario=new FormGroup ({
    
    id: new FormControl(''),
    nombre_apellido: new FormControl(''),
    titulo_acad: new FormControl(''),
    descripcion: new FormControl(''),
    cv: new FormControl(''),
    foto_url: new FormControl('') 
  })



  ngOnInit(){ /*actualiza la propiedad onEdition del componente cada vez que el valor del observable cambia */
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta})
    this.onGet();
  }

  putForm(id: number | undefined){
    this.personaperfilServices.putPersonaPerfil(id, this.miFormulario.value).subscribe((result)=>{
    this.miFormulario.reset({});
  })
}
  setValues(){
    let data:any = [];
    data = this.personasperfil;
    this.miFormulario.patchValue(data);

  }

  onGet(){
    this.personaperfilServices.getPersonaPerfil().subscribe(data =>{this.personasperfil=data});
  }
}
