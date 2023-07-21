import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Utenti } from '../Interfacce/utenti';

const utentiUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private http: HttpClient) { }

  getUtenti(): Observable<Utenti[]> {
    return this.http.get<Utenti[]>(utentiUrl+"/utenti/getAll");
  }

  postUtenti(utente: Utenti): Observable<Utenti> {
    return this.http.post<Utenti>(utentiUrl+"/post", utente);
  }

  updateUtenti(id: number, utente: Utenti): Observable<Utenti> {
    const url = `${utentiUrl}/${id}`;
    return this.http.put<Utenti>(url, utente);
  }

  deleteUtenti(id: number): Observable<void> {
    const url = `${utentiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
