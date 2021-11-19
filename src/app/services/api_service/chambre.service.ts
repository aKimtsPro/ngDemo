import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../../models/chambre.model';
import { ChambreForm } from '../../models/chambre-form.model';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  private _apiUrl = "http://localhost:8080/room";

  constructor(private _client: HttpClient) { }

  getAll() : Observable<Chambre[]>{
    return this._client.get( this._apiUrl ) as Observable<Chambre[]>;
  }

  postChambre(toPost: ChambreForm) : Observable<Chambre>{
    return this._client.post( this._apiUrl, toPost ) as Observable<Chambre>;
  }
}
