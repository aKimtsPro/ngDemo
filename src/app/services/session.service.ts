import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly _correctUsername = "user";
  private readonly _correctPassword = "pass"; 
  private readonly _storageKey = "connectedUser";

  test = "salut";

  constructor() { }

  login( credentials: Credentials ): boolean {
    
    if( credentials.username == this._correctUsername && credentials.password == this._correctPassword ){
      sessionStorage.setItem(this._storageKey, credentials.username);
      return true;
    }
    return false;

  }

  logout() {

    sessionStorage.removeItem(this._storageKey);

  }

  isLogged(){

    const connectedUser = sessionStorage.getItem(this._storageKey);
    return connectedUser != undefined;

  }

  getConnectedUser() {

    return sessionStorage.getItem(this._storageKey);

  }

}
