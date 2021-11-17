import { Component, EventEmitter, OnInit } from '@angular/core';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-new-text',
  templateUrl: './new-text.component.html',
  styleUrls: ['./new-text.component.css']
})
export class NewTextComponent implements OnInit {

  newestText: string = "rien n'a encore été envoyé";

  constructor(textService: TextService) {
    textService.getNewTextObs().subscribe( (text: string) => {
      console.log( 'un émission a été envoyé : ' + text )
      this.newestText = text;
    }
   );
  }

  ngOnInit(): void {
  }

}
