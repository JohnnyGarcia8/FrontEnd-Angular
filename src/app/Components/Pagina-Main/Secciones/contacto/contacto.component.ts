import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/assets/Modelos/ContactoModel';
import { ContactoService } from 'src/assets/services/portfolio/contacto.service';
import { LoginServiceService } from 'src/assets/services/servicio/login-service.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(
    public loginService: LoginServiceService,
    private contactoServices: ContactoService) {
  }

  onEdition: boolean = false;
  contactos: Contacto[] = [];


  ngOnInit() {
    this.loginService.observableEdit.subscribe(respuesta => { this.onEdition = respuesta });
    this.onGet();
  }

  onGet() {
    this.contactoServices.getContacto().subscribe(data => { this.contactos = data });
  }
}
