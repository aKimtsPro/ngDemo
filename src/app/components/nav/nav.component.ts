import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('connectedUser');
  }

  isConnected(){
    alert('vous êtes déconnecté');
    return sessionStorage.getItem('connectedUser');
  }

}
