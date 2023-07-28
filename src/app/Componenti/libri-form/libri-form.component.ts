import { Component } from '@angular/core';
import { Libro } from 'src/app/Interfacce/libro';

import { LibroService } from 'src/app/Service/libro.service';

@Component({
  selector: 'app-libri-form',
  templateUrl: './libri-form.component.html',
  styleUrls: ['./libri-form.component.css']
})
export class LibriFormComponent {

  a = ''; b = [];
  c = ''; d = '';
  e = '';

  constructor(private libriService: LibroService){}

  postLibri(libro: Libro){
    this.libriService.postLibro(libro)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
