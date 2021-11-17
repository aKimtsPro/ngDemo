import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private listText: string[] = ['premier'];
  private newTextObs = new Subject<string>();
  private updatedListObs = new BehaviorSubject<string[]>( this.listText );

  constructor() { }

  add(toAdd: string){
    this.listText.push( toAdd );

    this.newTextObs.next( toAdd );
    this.updatedListObs.next( [...this.listText] );
  }
  
  remove(index: number){
    this.listText.splice(index, 1);
    this.updatedListObs.next( [...this.listText] )
  }

  getList(){
    return [...this.listText];
  }

  getNewTextObs(): Observable<string> {
    return this.newTextObs;
  }

  getUpdatedListObs(): Observable<string[]> {
    return this.updatedListObs;
  }
}
