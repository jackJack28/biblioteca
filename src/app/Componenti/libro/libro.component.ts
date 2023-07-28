import { Component, OnInit } from '@angular/core';

import { LibroService } from 'src/app/Service/libro.service';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  constructor(private service: LibroService){}

  deleteLibro(id: number){
    this.service.deleteLibro(id)
    .subscribe((res) => {
      console.log(res);
      this.ngOnInit(); //Questo è per ricaricare i dati in tabella dopo aver modificato un record
    })
  }

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

