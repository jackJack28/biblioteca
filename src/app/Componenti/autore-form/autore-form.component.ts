import { Component } from '@angular/core';

import { Autore } from 'src/app/Interfacce/autore';
import { AutoreService } from 'src/app/Service/autore.service';

@Component({
  selector: 'app-autore-form',
  templateUrl: './autore-form.component.html',
  styleUrls: ['./autore-form.component.css']
})
export class AutoreFormComponent {

  a = '';
  b = '';
  c = '';
  d = '';

  constructor(private autoriService: AutoreService){}

  postAutore(autore: Autore){
    this.autoriService.postAutore(autore)
    .subscribe((res) => {
      console.log(res);
    })
  }

}
