import { Component, Input, OnInit } from '@angular/core';
import { CourseItem } from 'src/app/models/course-item.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  @Input()
  item: CourseItem = {
    nom: '',
    qtt: 0
  }

  newQtt: number = 1;

  constructor(private _coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  onModify(){
    if( this.newQtt > 0 )
      this._coursesService.modifyQtt( this.item.nom, this.newQtt );
  }

  onDelete(){
    this._coursesService.remove( this.item );
  }

}
