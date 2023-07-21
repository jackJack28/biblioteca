import { Component, OnInit } from '@angular/core';

import { UtentiService } from 'src/app/Service/utenti.service';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  constructor(private service: UtentiService){}

  dati: any
  ngOnInit(): void {
    this.service.getUtenti().subscribe(
      response => {
        console.log(response)
        this.dati = response;
      }
    )
  }
}
