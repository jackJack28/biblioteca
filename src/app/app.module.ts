import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoreComponent } from './Componenti/autore/autore.component';
import { LibroComponent } from './Componenti/libro/libro.component';
import { PrestitoComponent } from './Componenti/prestito/prestito.component';
import { UtentiComponent } from './Componenti/utenti/utenti.component';
import { NavbarComponent } from './Componenti/navbar/navbar.component';
import { NotfoundComponent } from './Componenti/notfound/notfound.component';
import { HomeComponent } from './Componenti/home/home.component';
import { FormComponent } from './Componenti/form/form.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LibriFormComponent } from './Componenti/libri-form/libri-form.component';
import { AutoreFormComponent } from './Componenti/autore-form/autore-form.component';
import { UtenteFormComponent } from './Componenti/utente-form/utente-form.component';
import { PrestitoIdFormComponent } from './Componenti/prestito-id-form/prestito-id-form.component';
import { AggiornaAutoreFormComponent } from './Componenti/aggiorna-autore-form/aggiorna-autore-form.component';
import { AggiornaLibriFormComponent } from './Componenti/aggiorna-libri-form/aggiorna-libri-form.component';
import { AggiornaUtenteFormComponent } from './Componenti/aggiorna-utente-form/aggiorna-utente-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoreComponent,
    LibroComponent,
    PrestitoComponent,
    UtentiComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent,
    FormComponent,
    LibriFormComponent,
    AutoreFormComponent,
    UtenteFormComponent,
    PrestitoIdFormComponent,
    AggiornaAutoreFormComponent,
    AggiornaLibriFormComponent,
    AggiornaUtenteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
