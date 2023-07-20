import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibroComponent } from './Componenti/libro/libro.component';
import { AutoreComponent } from './Componenti/autore/autore.component';
import { PrestitoComponent } from './Componenti/prestito/prestito.component';
import { UtentiComponent } from './Componenti/utenti/utenti.component';
import { NotfoundComponent } from './Componenti/notfound/notfound.component';
import { HomeComponent } from './Componenti/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "libri", component: LibroComponent},
  {path: "autori", component: AutoreComponent},
  {path: "prestiti", component: PrestitoComponent},
  {path: "utenti", component: UtentiComponent},
  {path: "404", component: NotfoundComponent},
  {path: "**", redirectTo: "404", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
