//import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

//import { Observable, from } from 'rxjs';
import { AutoreService } from 'src/app/Service/autore.service';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent implements OnInit {

  //apiUrl = 'http://localhost:8080/api/autori';

  constructor(private service: AutoreService){}

  /*getAutori(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl)
  }*/

  /*getAutori(): Observable<any> {
    return from(
      fetch(
        this.apiUrl,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'GET',
          mode: 'no-cors' //Questa è riga di codice più importante però sebbene si riesce a risolvere il problema di cors, il browser poi non sa come mandare a schermo i dati.
        }
      ));
  }*/

  dati: any
  ngOnInit(): void {
    this.service.getAutori().subscribe(
      response => {
        console.log(response)
        this.dati = response;
      }
    )
  }
}