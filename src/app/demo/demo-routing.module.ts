import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TextComponent } from './text/text.component';
import { ApiRequestComponent } from './api-request/api-request.component';
import { SecuredRequestFormComponent } from './secured-request-form/secured-request-form.component';
import { ReservDetailsComponent } from './reserv/reserv-details/reserv-details.component';
import { ServiceComponent } from './service/service.component';
import { SendImgComponent } from './send-img/send-img.component';
import { VilleDetailComponent } from './ville-detail/ville-detail.component';

const routes: Routes = [
    { path:'com', component: ParentComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'obs', component: TextComponent },
    { path: 'http', component: ApiRequestComponent},
    { path: 'secured-http', component: SecuredRequestFormComponent },
    { path: 'reserv-detail/:id', component: ReservDetailsComponent },
    { path: 'service', component: ServiceComponent},
    { path: 'send', component: SendImgComponent},
    { path: 'ville/:id', component: VilleDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes) // parce qu'on y décrit des routes enfants (/demo/...)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule { }
