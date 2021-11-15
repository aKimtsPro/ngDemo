import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-permut',
  templateUrl: './permut.component.html',
  styleUrls: ['./permut.component.css']
})
export class PermutComponent implements OnInit {

  @Input('is-red')
  isRed= true;

  @Output('switch')
  switchEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  triggerSwitch(){
    this.switchEmitter.emit();
  }

}
