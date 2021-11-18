import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private _apiUrl = "http://localhost:8080/room";

  constructor(private _client: HttpClient) { }

  getAll(){
    return this._client.get( this._apiUrl );
  }
}
