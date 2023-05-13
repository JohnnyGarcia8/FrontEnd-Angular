import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonaPerfil } from 'src/assets/Modelos/PersonaPerfilModel';

@Injectable({
  providedIn: 'root'
})
export class PersonaPerfilService {

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:8080/personaperfil';

  
  getPersonaPerfil(): Observable<PersonaPerfil[]> {
    return this.http.get<PersonaPerfil[]>(this.url + '/ver');
  }

  getPersonaPerfilbyId(id: number): Observable<PersonaPerfil> {
    return this.http.get<PersonaPerfil>(this.url + '/buscar/' + id );
  }

  postPersonaPerfil(data: Object): Observable<PersonaPerfil> {
    return this.http.post<PersonaPerfil>(this.url + '/crear', data);
  }

  putPersonaPerfil(id: number, data: Object): Observable<PersonaPerfil> {
    return this.http.put<PersonaPerfil>(this.url + '/editar/' + id, data);
  }

  deletePersonaPerfil(id: number): Observable<PersonaPerfil> {
    return this.http.delete<PersonaPerfil>(this.url + '/borrar/' + id);
  }
}
