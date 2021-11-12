import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './parent/enfant/enfant.component';
import { DemoRoutingModule } from './demo-routing.module';



@NgModule({
  declarations: [
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
