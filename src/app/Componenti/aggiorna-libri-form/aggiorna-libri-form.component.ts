import { Component } from '@angular/core';

import { Libro } from 'src/app/Interfacce/libro';

import { LibroService } from 'src/app/Service/libro.service';

@Component({
  selector: 'app-aggiorna-libri-form',
  templateUrl: './aggiorna-libri-form.component.html',
  styleUrls: ['./aggiorna-libri-form.component.css']
})
export class AggiornaLibriFormComponent {

  a = ''; b = ''; c = '';
  d = ''; e = '';

  constructor(private libriService: LibroService){}
  
  updateLibro(id: number, libro: Libro){
    this.libriService.updateLibro(id, libro)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
