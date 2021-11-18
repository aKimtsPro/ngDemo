import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUser } from '../demo/models/api-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _client: HttpClient) {

   }

  public getUsers(): Observable< ApiUser[] >{
    return this._client.get(this._apiUrl) as Observable< ApiUser[] >;
  }

  public postUser( toPost: ApiUser ): Observable< ApiUser >{
    return this._client.post(this._apiUrl, toPost) as Observable< ApiUser >;
  }

}
