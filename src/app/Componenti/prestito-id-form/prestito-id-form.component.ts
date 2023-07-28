import { Component } from '@angular/core';

import { Prestito } from 'src/app/Interfacce/prestito';

import { PrestitoService } from 'src/app/Service/prestito.service';

@Component({
  selector: 'app-prestito-id-form',
  templateUrl: './prestito-id-form.component.html',
  styleUrls: ['./prestito-id-form.component.css']
})
export class PrestitoIdFormComponent {

  a = ''; b = '';
  c = ''; d = '';
  e = ''; f = '';
  g = ''; h = '';
  i = ''; l = '';

  constructor(private prestitoService: PrestitoService){}

  postPrestito(prestito: Prestito){
    this.prestitoService.postPrestiti(prestito)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
