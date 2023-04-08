import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  clave:string="12345";
  usuario:string="usuario";
  onEdition:boolean=false;

  login(cla:string, user:string){
    if (this.clave===cla && this.usuario===user) {
      this.onEdition=true;
    }
  }

  outLog(){ 
    this.onEdition=false;
  }
}
