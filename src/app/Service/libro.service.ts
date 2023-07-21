import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Libro } from '../Interfacce/libro';

const libroUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }

  getLibri(): Observable<Libro[]> {
    return this.http.get<Libro[]>(libroUrl+"/libri/getAll");
  }

  postLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(libroUrl+"/post", libro);
  }

  updateLibro(id: number, libro: Libro): Observable<Libro> {
    const url = `${libroUrl}/${id}`;
    return this.http.put<Libro>(url, libro);
  }

  deleteLibro(id: number): Observable<void> {
    const url = `${libroUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
