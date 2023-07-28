import { Component } from '@angular/core';
import { Utenti } from 'src/app/Interfacce/utenti';
import { UtentiService } from 'src/app/Service/utenti.service';

@Component({
  selector: 'app-utente-form',
  templateUrl: './utente-form.component.html',
  styleUrls: ['./utente-form.component.css']
})
export class UtenteFormComponent {

  a = ''; b = '';
  c = ''; d = '';
  e = '';

  constructor(private utenteService: UtentiService){}

  postUtente(utente: Utenti){
    this.utenteService.postUtenti(utente)
    .subscribe((res) => {
      console.log(res);
    })
  }
}
