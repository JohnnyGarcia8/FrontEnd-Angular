import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from 'src/assets/Modelos/HabilidadesModel';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:8080/habilidades';

  
  getHabilidades(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(this.url + '/ver');
  }

  getHabilidadesbyId(id: number): Observable<Habilidades> {
    return this.http.get<Habilidades>(this.url + '/buscar/' + id );
  }

  postHabilidades(data: Object): Observable<Habilidades> {
    return this.http.post<Habilidades>(this.url + '/crear', data);
  }

  putHabilidades(id: number, data: Object): Observable<Habilidades> {
    return this.http.put<Habilidades>(this.url + '/editar/' + id, data);
  }

  deleteHabilidades(id: number): Observable<Habilidades> {
    return this.http.delete<Habilidades>(this.url + '/borrar/' + id);
  }
}
