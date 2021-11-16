import { Injectable } from '@angular/core';
import { CourseItem } from '../models/course-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _listCourses: CourseItem[] = [];

  constructor() { }

  public addToList( item: CourseItem ){

    if( item.qtt <= 0 )
      throw 'item qtt cannot be equal or bellow 0';

    const existingItem = this._listCourses.filter( e => e.nom == item.nom )[0];
    if( existingItem ){
      existingItem.qtt += item.qtt;
    }
    else {
      this._listCourses.push( item );
    }

  }

  public remove( toRemove: CourseItem ){

    const index = this._listCourses.indexOf(toRemove);
    this._listCourses.splice(index, 1);

  }

  modifyQtt( name: string, newQtt: number ){

    if( newQtt <= 0 ) 
      throw 'new Qtt cannot be 0 or bellow';

    const existingItem = this._listCourses.filter( e => e.nom == name )[0];
    if( existingItem ){
      existingItem.qtt = newQtt;
    }

  }

  getList(): CourseItem[] {
    return this._listCourses;
  }

}
