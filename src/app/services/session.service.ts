import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly _usersList : User[] = [
    {
      username: "user",
      password: "pass"
    }
  ]

  private readonly _storageKey = "connectedUser";

  test = "salut";

  constructor() { }

  login( credentials: Credentials ): boolean {
    
    const concernedUser = this._usersList.find( e => e.username == credentials.username);

    if( concernedUser && credentials.password == concernedUser.password ){
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

  signup( toAdd: User ){

    if( this._usersList.find(e => e.username == toAdd.username) )
      throw 'this username is already taken';

    this._usersList.push(toAdd);
  }

}
