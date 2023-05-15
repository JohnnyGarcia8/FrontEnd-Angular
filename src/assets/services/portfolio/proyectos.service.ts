import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/assets/Modelos/ProyectosModel';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }

  private url = 'https://jonathan-garcia.onrender.com/proyectos';

  
  getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.url + '/ver');
  }

  getProyectosbyId(id: number): Observable<Proyectos> {
    return this.http.get<Proyectos>(this.url + '/buscar/' + id );
  }

  postProyectos(data: Object): Observable<Proyectos> {
    return this.http.post<Proyectos>(this.url + '/crear', data);
  }

  putProyectos(id: number, data: Object): Observable<Proyectos> {
    return this.http.put<Proyectos>(this.url + '/editar/' + id, data);
  }

  deleteProyectos(id: number): Observable<Proyectos> {
    return this.http.delete<Proyectos>(this.url + '/borrar/' + id);
  }
}
