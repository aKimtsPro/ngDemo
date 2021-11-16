import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './parent/enfant/enfant.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ParentComponent,
    EnfantComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }
