import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
    { path:'com', component: ParentComponent },
    { path: 'signup', component: SignupFormComponent }
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
