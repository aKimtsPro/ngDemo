import { Component, OnInit } from '@angular/core';
import { CourseItem } from 'src/app/models/course-item.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-item-form',
  templateUrl: './course-item-form.component.html',
  styleUrls: ['./course-item-form.component.css']
})
export class CourseItemFormComponent implements OnInit {

  toAdd: CourseItem = {
    nom:'',
    qtt: 1
  }

  constructor(private _coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  onAdd(){
    if( this.toAdd.nom && this.toAdd.nom != '' && this.toAdd.qtt > 0 ){
      this._coursesService.addToList(this.toAdd);
      this.toAdd = {
        nom: '',
        qtt: 1
      }
    }
  }

}
