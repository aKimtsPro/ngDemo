import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { PanierComponent } from './panier/panier.component';
import { ComComponent } from './com/com.component';
import { GestionTacheComponent } from './gestion-tache/gestion-tache.component';
import { ListCourseComponent } from './list-course/list-course.component';

const routes: Routes = [
  { path: 'root', component: RootComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'com1', component: ComComponent},
  { path: 'com2', component: GestionTacheComponent },
  { path: 'services', component: ListCourseComponent}
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
