import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './parent/enfant/enfant.component';
import { DemoRoutingModule } from './demo-routing.module';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { NewTextComponent } from './text/new-text/new-text.component';
import { ApiRequestComponent } from './api-request/api-request.component';
import { SecuredRequestFormComponent } from './secured-request-form/secured-request-form.component';
import { ReservDetailsComponent } from './reserv/reserv-details/reserv-details.component';
import { ServiceComponent } from './service/service.component';



@NgModule({
  declarations: [
    ParentComponent,
    EnfantComponent,
    SignupFormComponent,
    TextComponent,
    NewTextComponent,
    ApiRequestComponent,
    SecuredRequestFormComponent,
    ReservDetailsComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DemoModule { }
