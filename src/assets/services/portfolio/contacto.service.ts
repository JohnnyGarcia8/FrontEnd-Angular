import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contacto } from 'src/assets/Modelos/ContactoModel';




@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http:HttpClient) { }

  private url = 'https://jonathan-garcia.onrender.com/contacto';

  
  getContacto(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.url + '/ver');
  }

  getContactobyId(id: number): Observable<Contacto> {
    return this.http.get<Contacto>(this.url + '/buscar/' + id );
  }

  postContacto(data: Object): Observable<Contacto> {
    return this.http.post<Contacto>(this.url + '/crear', data);
  }

  putContacto(id: number, data: Object): Observable<Contacto> {
    return this.http.put<Contacto>(this.url + '/editar/' + id, data);
  }

  deleteContacto(id: number): Observable<Contacto> {
    return this.http.delete<Contacto>(this.url + '/borrar/' + id);
  }
}

