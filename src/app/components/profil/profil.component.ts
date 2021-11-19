import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/api_service/session.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor( private _sessionService: SessionService ) { }

  ngOnInit(): void {
  }

  getUsername(){
    return this._sessionService.getConnectedUser();
  }

}
