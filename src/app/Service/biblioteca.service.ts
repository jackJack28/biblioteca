import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getbiblioteca(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl)
  }
}
