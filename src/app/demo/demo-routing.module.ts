import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TextComponent } from './text/text.component';
import { ApiRequestComponent } from './api-request/api-request.component';

const routes: Routes = [
    { path:'com', component: ParentComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'obs', component: TextComponent },
    { path: 'http', component: ApiRequestComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule { }
