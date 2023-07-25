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
import {FormsModule} from '@angular/forms';


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
    FormComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
