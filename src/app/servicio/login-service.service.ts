
/* cree este service para compartir datos y funcionalidades entre componentes*/
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; /*es una clase que se utiliza para emitir eventos y notificar a los observadores que se han producido cambios */

@Injectable({ /*decorador*/
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  edit:boolean=false; /*activa los botones de edicion */
  private sendEdit=new Subject<boolean>();/* que se utiliza para enviar eventos cuando se edita el formulario de inicio de sesión*/
  observableEdit=this.sendEdit.asObservable();

  logged(edit:boolean){ /*si estoy logueado me habilita los edits*/
     this.edit=edit;
     this.sendEdit.next(edit);
  }

  onLogged:boolean=false; /*remplaza mi boton de user por el boton de cerrar sesión.Esto ocurre gracias al observable que trae los datos*/
  private sendOnLogged=new Subject<boolean>();
  observableOnLogged=this.sendOnLogged.asObservable();

  out(onLogged:boolean){ /*si estoy logueado me habilita el icono de cerrar sesión*/
     this.onLogged=onLogged;
     this.sendOnLogged.next(onLogged);
  }
}

