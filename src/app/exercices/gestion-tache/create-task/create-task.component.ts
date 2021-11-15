import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  toDo : string = '';

  @Output('add-to-start')
  addToStartEmitter = new EventEmitter<string>();

  @Output('add-to-end')
  addToEndEmitter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  addToStart(){
    this.addToStartEmitter.emit(this.toDo);
    this.toDo = '';
  }

  addToEnd(){
    this.addToEndEmitter.emit(this.toDo);
    this.toDo = '';
  }

}
