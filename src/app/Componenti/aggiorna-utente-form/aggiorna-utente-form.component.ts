import { Component } from '@angular/core';

import { Utenti } from 'src/app/Interfacce/utenti';

import { UtentiService } from 'src/app/Service/utenti.service';

@Component({
  selector: 'app-aggiorna-utente-form',
  templateUrl: './aggiorna-utente-form.component.html',
  styleUrls: ['./aggiorna-utente-form.component.css']
})
export class AggiornaUtenteFormComponent {

  a = ''; b = ''; c = '';
  d = ''; e = '';

  constructor(private utentiService: UtentiService){}

  updateUtente(id: number, utente: Utenti){
    this.utentiService.updateUtenti(id, utente)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
