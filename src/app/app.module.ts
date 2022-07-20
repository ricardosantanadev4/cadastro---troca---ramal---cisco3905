import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarRamalComponent } from './cadastrar-ramal/cadastrar-ramal.component';
import { NavbarComponent } from './sharedcomponent/navbar/navbar.component';
// @angular/material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PesquizarRamalComponent } from './pesquizar-ramal/pesquizar-ramal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarRamalComponent,
    NavbarComponent,
    PesquizarRamalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
