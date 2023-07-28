import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibroComponent } from './Componenti/libro/libro.component';
import { AutoreComponent } from './Componenti/autore/autore.component';
import { PrestitoComponent } from './Componenti/prestito/prestito.component';
import { UtentiComponent } from './Componenti/utenti/utenti.component';
import { NotfoundComponent } from './Componenti/notfound/notfound.component';
import { HomeComponent } from './Componenti/home/home.component';
import { FormComponent } from './Componenti/form/form.component';
import { LibriFormComponent } from './Componenti/libri-form/libri-form.component';
import { AutoreFormComponent } from './Componenti/autore-form/autore-form.component';
import { UtenteFormComponent } from './Componenti/utente-form/utente-form.component';
import { PrestitoIdFormComponent } from './Componenti/prestito-id-form/prestito-id-form.component';
import { AggiornaAutoreFormComponent } from './Componenti/aggiorna-autore-form/aggiorna-autore-form.component';
import { AggiornaLibriFormComponent } from './Componenti/aggiorna-libri-form/aggiorna-libri-form.component';
import { AggiornaUtenteFormComponent } from './Componenti/aggiorna-utente-form/aggiorna-utente-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "libri", component: LibroComponent},
  {path: "autori", component: AutoreComponent},
  {path: "prestiti", component: PrestitoComponent},
  {path: "utenti", component: UtentiComponent},
  {path: "form", component: FormComponent},
  {path: "formLibri", component: LibriFormComponent},
  {path: "formAutore", component: AutoreFormComponent},
  {path: "formUtente", component: UtenteFormComponent},
  {path: "formPrestitoId", component: PrestitoIdFormComponent},
  {path: "aggiornaAutore", component: AggiornaAutoreFormComponent},
  {path: "aggiornaLibro", component: AggiornaLibriFormComponent},
  {path: "aggiornaUtente", component: AggiornaUtenteFormComponent},
  {path: "404", component: NotfoundComponent},
  {path: "**", redirectTo: "404", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
