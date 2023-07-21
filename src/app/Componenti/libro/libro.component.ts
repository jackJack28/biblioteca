import { Component, OnInit } from '@angular/core';

import { LibroService } from 'src/app/Service/libro.service';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor(private service: LibroService){}

  dati: any
  ngOnInit(): void {
    this.service.getLibri().subscribe(
      response => {
        console.log(response)
        this.dati = response;
      }
    )
  }
}

