import { Component, OnInit } from '@angular/core';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  newText = '';
  listText: string[] = [];

  constructor(private textService: TextService) { 
    
  }

  ngOnInit(): void {
  }

  connectToObs(){
    this.textService.getUpdatedListObs().subscribe( (newList) => { console.log('okok');this.listText = newList } );
  }

  addText(){
    this.textService.add(this.newText);
    this.newText = '';
  }

  remove(index: number){
    this.textService.remove(index);
  }

}
