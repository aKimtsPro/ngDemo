import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservRequest } from 'src/app/models/reserv-request.model';
import { Reservation } from 'src/app/models/reservation.model';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly _apiUrl = "http://localhost:8080/reserv"

  constructor(private _client: HttpClient, private _sServ: SessionService ) { }

  public sendReservRequest(request : ReservRequest) : Observable<Reservation>{
    return this._client.post(
      this._apiUrl+"/request", // url 
      request, // body
      { // options
        headers: {
          'Authorization': this._sServ.getApiKey()
        },
        withCredentials: true
      }
      ) as Observable<Reservation>;
  }

  public getReservation(id: number): Observable<Reservation>{
    return this._client.get(this._apiUrl+'/'+id) as Observable<Reservation>;
  }
}
