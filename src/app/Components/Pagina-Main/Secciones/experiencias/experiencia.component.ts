import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/assets/Modelos/EstudiosModel';
import { Experiencia } from 'src/assets/Modelos/ExperienciaModel';
import { EstudiosService } from 'src/assets/services/portfolio/estudios.service';
import { ExperienciaService } from 'src/assets/services/portfolio/experiencia.service';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {

  constructor(
    public loginService:LoginServiceService,
    private experienciaService: ExperienciaService,
    private estudiosService: EstudiosService){ 
    
  }

  onEdition:boolean=false;
  experiencia: Experiencia[] = [];
  estudios: Estudios[] = [];


  ngOnInit(){
    this.loginService.observableEdit.subscribe(respuesta=>{this.onEdition=respuesta});
    this.onGetExperiencia();
    this.onGetEstudios();
  }

  onGetExperiencia(){
    this.experienciaService.getExperiencia().subscribe(data =>{this.experiencia=data})
  }

  onGetEstudios(){
    this.estudiosService.getEstudios().subscribe(data =>{this.estudios=data})
  }

}
