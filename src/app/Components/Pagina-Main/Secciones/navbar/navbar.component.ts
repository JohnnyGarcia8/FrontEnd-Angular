import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public loginService:LoginServiceService){ 
  }
  onLogged:boolean=false; /*declaro dos propiedades onLogged: que es logueado y que da lugar a los editable(onEdition)*/
  onEdition:boolean=false;
  menu:boolean = false;

  ngOnInit(){ /*se ejecuta una vez que la clase ha sido iniciada*/
    this.loginService.observableOnLogged.subscribe(respuesta=>{this.onLogged=respuesta}) /*el observable avisa a la clase cuando cambia el estado de inicio de sesión y va a actualizar la propiedad "onLogged" (esta sincronizado con el servicio) */
  }
  
  outLog(){ /*cierra sesión de usuario*/
    this.loginService.logged(false); /*cambia el estado de inicio de sesión del usuario en el servicio */
    this.loginService.out(false);/*cambia el estado de cierre de sesión*/
  }

}
