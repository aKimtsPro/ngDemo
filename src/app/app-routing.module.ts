import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from 'src/app/exercices/root/root.component'
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path:'exo', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
