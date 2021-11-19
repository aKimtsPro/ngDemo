import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Chambre } from 'src/app/models/chambre.model';
import { ChambreService } from 'src/app/services/api_service/chambre.service';


function validateType(controls: AbstractControl) : ValidationErrors | null {

  const v = controls.value;
  if( v == "SUITE" || v == "PENTHOUSE" || v == "BASIC" )
    return null;

  return {
    'typeInvalid': 'Le type de chambre est invalide'
  }

}


@Component({
  selector: 'app-gest-chambre',
  templateUrl: './gest-chambre.component.html',
  styleUrls: ['./gest-chambre.component.css']
})
export class GestChambreComponent implements OnInit {

  listChambre: Chambre[] = [];

  chambreFormGroup : FormGroup;

  constructor(private _cServ: ChambreService, builder: FormBuilder) {
    this.chambreFormGroup = builder.group({
      'numero': new FormControl(null, [Validators.min(1), Validators.required]),
      'nbrPlaces': new FormControl(1, [Validators.min(1), Validators.max(5), Validators.required]),
      'type': new FormControl('BASIC', [Validators.required, validateType]),
      'prix': new FormControl(0, [Validators.min(0), Validators.required])
    })
  }

  ngOnInit(): void {
    this.reloadList();
  }

  onSubmit(){
    if( this.chambreFormGroup.valid ){
      const v = this.chambreFormGroup.value;
      this._cServ.postChambre({
        numeroChambre: v.numero,
        nbrPlaces: v.nbrPlaces,
        type: v.type,
        prix: v.prix
      })
      .subscribe({
        next: (inserted) => { this.reloadList() },
        error: (error) => { console.log(error); }
      })
    }
  }

  reloadList() {
    this._cServ.getAll().subscribe({
      next: chambres => this.listChambre = chambres,
      error: error => alert("Echec du serveur. Recupération impossible"),
      complete: () => console.log('complete')
    })
  }

}
