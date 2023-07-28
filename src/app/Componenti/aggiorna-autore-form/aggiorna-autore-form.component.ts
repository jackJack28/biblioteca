import { Component } from '@angular/core';

import { Autore } from 'src/app/Interfacce/autore';

import { AutoreService } from 'src/app/Service/autore.service';

@Component({
  selector: 'app-aggiorna-autore-form',
  templateUrl: './aggiorna-autore-form.component.html',
  styleUrls: ['./aggiorna-autore-form.component.css']
})
export class AggiornaAutoreFormComponent {

  a = ''; b = '';
  c = ''; d = '';

  constructor(private autoreService: AutoreService){}

  updateAutore(id: number, autore: Autore){
    this.autoreService.updateAutore(id, autore)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
