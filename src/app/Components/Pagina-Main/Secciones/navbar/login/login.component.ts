import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  constructor(public loginService:LoginServiceService){ /*creo un login simple solo de prueba, que al ser logueados te muestra los botones de edicion*/

  }
  clave:string="1234";
  usuario:string="usuario";

  addLogin=new FormGroup({ /*especifica los controles (usuario y clave) que estarán dentro del formulario*/
    usuario:new FormControl(''), /*valida los datos ingresados por el usuario en cada control individual*/
    clave:new FormControl('') /*estos formControl estan definidos en el codigo del formulario ( ej: formControlName="clave") */
  });

  login(){
    if (this.usuario===this.addLogin.value.usuario && this.clave===this.addLogin.value.clave) { /*si ambos (usuario-clave) son true se cumple la condicion y te deja entrar al user*/
      this.loginService.logged(true);
      this.loginService.out(true);
    }
  }

}
