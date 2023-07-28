import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Autore } from 'src/app/Interfacce/autore';
import { Libro } from 'src/app/Interfacce/libro';
import { Prestito } from 'src/app/Interfacce/prestito';
import { Utenti } from 'src/app/Interfacce/utenti';

import { AutoreService } from 'src/app/Service/autore.service';
import { LibroService } from 'src/app/Service/libro.service';
import { PrestitoService } from 'src/app/Service/prestito.service';
import { UtentiService } from 'src/app/Service/utenti.service';


/*let autore: Autore;
let libro: Libro;
let utenti: Utenti;*/


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  a = ''; b = ''; c = ''; d = '';
  e = ''; f = ''; g = ''; h = '';
  i = ''; l = ''; m = ''; n = '';
  o = ''; p = ''; q = ''; r = '';
  s = ''; t = ''; u = ''; v = '';
  j = ''; k = ''; w = ''; x = '';
  y = ''; z = ''; aa = '';


  opzioni: string[] = ['Post', 'Update'];

  //autore!: Autore;
  //libro!: Libro;
  //utenti!: Utenti;
  //prestito!: Autore;

  constructor(private autoreService: AutoreService, private libriService: LibroService,
    private utentiService: UtentiService, private prestitoService: PrestitoService){}
    
 controller = new FormControl('')
 controller2 = new FormControl('')
 controller3 = new FormControl('')
 controller4 = new FormControl('')


  postAutori(autore: Autore){
    this.autoreService.postAutore(autore)
    .subscribe(res => {
      console.log(res);
    })
  }

  /*postLibri(libro:Libro){
    //console.log(this.libriService.postLibro(libro))
    //console.log(libro)
    //libro.listaAutori = []
    console.log(this.libriService.postLibro(libro))
  }*/

  postLibrii(libro: Libro){
    this.libriService.postLibro(libro)
    .subscribe((res) => {
      console.log(res);
    })
  }

  postUtenti(utenti: Utenti){
    this.utentiService.postUtenti(utenti)
    .subscribe((res) => {
      console.log(res);
    })
  }

  postPrestiti(prestito: Prestito){
    /*this.prestitoService.postUtenti(utenti)
    .subscribe((res) => {
      console.log(res);
    })*/
  }
}
