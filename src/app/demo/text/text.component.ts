import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  newText = '';
  listText: string[] = [];
  subscription: Subscription | null = null;

  constructor(private textService: TextService) { 
    
  }

  ngOnInit(): void {
  }

  connectToObs(){
    this.subscription = this.textService.getUpdatedListObs().subscribe( (newList) => { console.log('okok');this.listText = newList } );
  }

  unsubToObs(){
    this.subscription?.unsubscribe();
    this.subscription = null;
  }

  addText(){
    this.textService.add(this.newText);
    this.newText = '';
  }

  remove(index: number){
    if(this.subscription)
      this.textService.remove(index);
  }

}
