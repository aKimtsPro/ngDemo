import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotePipe } from './pipes/quote.pipe';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ExercicesModule } from './exercices/exercices.module';
import { Page404Component } from './components/page404/page404.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe,
    AccueilComponent,
    Page404Component,
    NavComponent,
    LoginComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ExercicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
