import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EvenOddComponent } from './components/even-odd/even-odd.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingComponent } from './components/routing/routing.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe,
    AccueilComponent,
    Page404Component,
    NavComponent,
    LoginComponent,
    ProfilComponent,
    EvenOddComponent,
    RoutingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ExercicesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
