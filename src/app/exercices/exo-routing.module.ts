import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: 'root', component: RootComponent},
  { path: 'panier', component: PanierComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExoRoutingModule { }
