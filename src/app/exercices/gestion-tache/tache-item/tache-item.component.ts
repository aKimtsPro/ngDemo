import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tache-item',
  templateUrl: './tache-item.component.html',
  styleUrls: ['./tache-item.component.css']
})
export class TacheItemComponent implements OnInit {

  @Input()
  tache: string = '';

  @Input("is-first")
  isFirst: boolean = false;
  
  @Input("is-last")
  isLast: boolean = false;

  @Output("increase-prio")
  increasePrioEmitter = new EventEmitter();

  @Output("decrease-prio")
  decreasePrioEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increasePrio(){
    if( !this.isFirst )
      this.increasePrioEmitter.emit();
  }

  decreasePrio(){
    if( !this.isLast )
      this.decreasePrioEmitter.emit();
  }

}
