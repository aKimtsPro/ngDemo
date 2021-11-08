import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotePipe } from './pipes/quote.pipe';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ExercicesModule } from './exercices/exercices.module';

@NgModule({
  declarations: [
    AppComponent,
    QuotePipe,
    AccueilComponent
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
