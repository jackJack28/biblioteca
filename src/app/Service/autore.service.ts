import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Autore } from '../Interfacce/autore';

const autoreUrl = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class AutoreService {

  constructor(private http: HttpClient) { }

  getAutori(): Observable<Autore[]> {
    return this.http.get<Autore[]>(autoreUrl+"/autori"); //{headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}}
  }
  
  getAutorebyId(id: number): Observable<Autore> {
    const url = `${autoreUrl}/autori/${id}`; //Non mi è chiaro il funzionamento di questo codice, non so se è giusto
    return this.http.get<Autore>(url);
  }

  postAutore(autore: Autore): Observable<Autore> {
    return this.http.post<Autore>(autoreUrl+"/post", autore);
  }

  updateAutore(id: number, autore: Autore): Observable<Autore> {
    const url = `${autoreUrl}/${id}`;
    return this.http.put<Autore>(url, autore);
  }

  deleteAutore(id: number): Observable<void> {
    const url = `${autoreUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
