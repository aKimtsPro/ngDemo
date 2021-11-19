import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  nbrToCheck= 0;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    // this._router.navigateByUrl('check-even/'+9);
    this._router.navigate(['check-even', 9]);
  }

}
