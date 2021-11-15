import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent implements OnInit {

  leftIsRed = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchColor(){
    this.leftIsRed = !this.leftIsRed;
  }

}
