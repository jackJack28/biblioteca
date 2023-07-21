import { Component, OnInit } from '@angular/core';

import { PrestitoService } from 'src/app/Service/prestito.service';


@Component({
  selector: 'app-prestito',
  templateUrl: './prestito.component.html',
  styleUrls: ['./prestito.component.css']
})
export class PrestitoComponent implements OnInit {

  constructor(private service: PrestitoService){}
  
  dati: any
  ngOnInit(): void {
    this.service.getPrestiti().subscribe(
      response => {
        console.log(response)
        this.dati = response;
      }
    )
  }
}
