import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/api_service/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private _sessionService: SessionService ) { }

  ngOnInit(): void {
  }

  logout(){
    alert('vous êtes déconnecté');
    this._sessionService.logout();
  }

  isConnected(){
    return this._sessionService.isLogged();
  }

}
