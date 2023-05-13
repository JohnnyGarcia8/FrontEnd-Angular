import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/assets/Modelos/ExperienciaModel';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:8080/experiencia';

  
  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + '/ver');
  }

  getExperienciabyId(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.url + '/buscar/' + id );
  }

  postExperiencia(data: Object): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.url + '/crear', data);
  }

  putExperiencia(id: number, data: Object): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.url + '/editar/' + id, data);
  }

  deleteExperiencia(id: number): Observable<Experiencia> {
    return this.http.delete<Experiencia>(this.url + '/borrar/' + id);
  }
}
