import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './parent/enfant/enfant.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { NewTextComponent } from './text/new-text/new-text.component';



@NgModule({
  declarations: [
    ParentComponent,
    EnfantComponent,
    SignupFormComponent,
    TextComponent,
    NewTextComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DemoModule { }
