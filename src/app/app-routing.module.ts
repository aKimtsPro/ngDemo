import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { EvenOddComponent } from './components/even-odd/even-odd.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RoutingComponent } from './components/routing/routing.component';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'routing', component: RoutingComponent},
  { path: 'exo', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule)},
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent, canActivate: [LoggedGuard] },
  { path: 'check-even/:nbr', component: EvenOddComponent },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // parce que c'est le principal, on y décrit les routes racines
  exports: [RouterModule]
})
export class AppRoutingModule { }
