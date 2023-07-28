import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Prestito } from '../Interfacce/prestito';


const prestitoUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PrestitoService {

  constructor(private http: HttpClient) { }

  getPrestiti(): Observable<Prestito[]> {
    return this.http.get<Prestito[]>(prestitoUrl+"/prestiti/getAll");
  }

  postPrestiti(prestito: Prestito): Observable<Prestito> {
    return this.http.post<Prestito>(prestitoUrl+"/prestiti/post", prestito);
  }
}
