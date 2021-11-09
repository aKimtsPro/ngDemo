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
    alert('vous êtes déconnecté');
    sessionStorage.removeItem('connectedUser');
  }

  isConnected(){
    return sessionStorage.getItem('connectedUser');
  }

}
