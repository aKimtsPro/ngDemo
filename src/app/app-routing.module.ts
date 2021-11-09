import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path:'exo', loadChildren: () => import('./exercices/exercices.module').then(m => m.ExercicesModule)},
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent, canActivate: [LoggedGuard] },
  { path: '404', component: Page404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
