import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation.model';
import { ReservationService } from 'src/app/services/api_service/reservation.service';

@Component({
  selector: 'app-reserv-details',
  templateUrl: './reserv-details.component.html',
  styleUrls: ['./reserv-details.component.css']
})
export class ReservDetailsComponent implements OnInit {

  id: number = 0;
  reserv: Reservation = {
      "id": 35,
      checkin: new Date(),
      checkout: new Date(),
      "breakfastIncluded": true,
      "client": {
        "username": "fake_data",
        "nom": "fake_data",
        "prenom": "fake_data",
        "tel": "fake_data",
        "moyenPayement": [
          "fake_data"
        ]
      },
      "chambre": {
        "numeroChambre": 72,
        "nbrPlaces": 71,
        "type": "SUITE",
        "prix": 62.90
      }
  };

  constructor(private _rServ: ReservationService, route: ActivatedRoute, private _router: Router) {
    this.id = route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this._rServ.getReservation(this.id).subscribe({
      next: response => this.reserv = response,
      error: err => this._router.navigateByUrl("404")
    })
  }

}
