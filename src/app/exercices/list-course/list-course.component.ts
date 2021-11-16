import { Component, OnInit } from '@angular/core';
import { CourseItem } from 'src/app/models/course-item.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private _coursesService: CoursesService) { }

  ngOnInit(): void {
  }

  getList() : CourseItem[] {
    return this._coursesService.getList();
  }

}
