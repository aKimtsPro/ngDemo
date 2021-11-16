import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { ExoRoutingModule } from './exo-routing.module';
import { PanierComponent } from './panier/panier.component';
import { FormsModule } from '@angular/forms';
import { ComComponent } from './com/com.component';
import { PermutComponent } from './com/permut/permut.component';
import { GestionTacheComponent } from './gestion-tache/gestion-tache.component';
import { CreateTaskComponent } from './gestion-tache/create-task/create-task.component';
import { TacheItemComponent } from './gestion-tache/tache-item/tache-item.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { CourseItemFormComponent } from './list-course/course-item-form/course-item-form.component';
import { CourseListItemComponent } from './list-course/course-list-item/course-list-item.component';



@NgModule({
  declarations: [
    RootComponent,
    PanierComponent,
    ComComponent,
    PermutComponent,
    GestionTacheComponent,
    CreateTaskComponent,
    TacheItemComponent,
    ListCourseComponent,
    CourseItemFormComponent,
    CourseListItemComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    FormsModule
  ],
  exports: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class ExercicesModule { }
