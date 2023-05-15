import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from 'src/assets/Modelos/EstudiosModel';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  constructor(private http:HttpClient) { }

  private url = 'https://jonathan-garcia.onrender.com/estudios';

  
  getEstudios(): Observable<Estudios[]> {
    return this.http.get<Estudios[]>(this.url + '/ver');
  }

  getEstudiosbyId(id: number): Observable<Estudios> {
    return this.http.get<Estudios>(this.url + '/buscar/' + id );
  }

  postEstudios(data: Object): Observable<Estudios> {
    return this.http.post<Estudios>(this.url + '/crear', data);
  }

  putEstudios(id: number, data: Object): Observable<Estudios> {
    return this.http.put<Estudios>(this.url + '/editar/' + id, data);
  }

  deleteEstudios(id: number): Observable<Estudios> {
    return this.http.delete<Estudios>(this.url + '/borrar/' + id);
  }
}
