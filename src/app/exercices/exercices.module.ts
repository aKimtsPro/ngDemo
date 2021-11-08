import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { ExoRoutingModule } from './exo-routing.module';
import { PanierComponent } from './panier/panier.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RootComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    FormsModule
  ],
  exports: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class ExercicesModule { }
