import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  inputColor: string = 'red';
  hexaColor: string = '#000000';
  colors = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF"
  ]
  countColor = 0;
  visible = false;
  title = 'ngDemo';
  titleClass = 'red';
  inputValue: string = '';

  onClick(event: MouseEvent){
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {

    setInterval( () => {
      if(this.countColor == 3)
        this.countColor = -1;

      this.hexaColor = this.colors[++this.countColor]
    },8000);

  }

  toggleDisplay(){
     this.visible = !this.visible;
  }

}
