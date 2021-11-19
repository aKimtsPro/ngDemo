import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservRequest } from 'src/app/models/reserv-request.model';
import { ReservationService } from 'src/app/services/api_service/reservation.service';

@Component({
  selector: 'app-secured-request-form',
  templateUrl: './secured-request-form.component.html',
  styleUrls: ['./secured-request-form.component.css']
})
export class SecuredRequestFormComponent implements OnInit {

  datesInvalid: boolean = false;

  reservForm = new FormGroup({
    'chambre': new FormControl('BASIC', [Validators.required]),
    'checkin': new FormControl(null, [Validators.required]),
    'checkout': new FormControl(null, [Validators.required]),
    'nbrPers': new FormControl(1, [Validators.required, Validators.min(1)]),
    'breakfastIncluded': new FormControl(false),
  })

  constructor(private _rServ: ReservationService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.reservForm.valid ){
      this._rServ.sendReservRequest( this.reservForm.value ).subscribe(
        {
          next: (response) => {
            console.log(response);
            this.datesInvalid = false;
            this._router.navigate(['demo','reserv-detail', response.id])
          },
          error: (err) => {
            console.error(err);
            if(err.status == 400){
              this.datesInvalid = true;
            }
          }
        }
      );
    }
  }

}
