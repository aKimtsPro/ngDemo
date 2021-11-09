import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.css']
})
export class EvenOddComponent implements OnInit {

  numberToCheck: number;

  constructor( actiRoute: ActivatedRoute ) { 
    this.numberToCheck = actiRoute.snapshot.params['nbr'];
  }

  ngOnInit(): void {
  }



}
