import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials.model';
import { SessionService } from 'src/app/services/api_service/session.service';

function nonBlank(control: AbstractControl): ValidationErrors | null {
  if( control.value != null && (control.value as string).trim().length != 0  )
    return null;

  return {
    'emptyField': 'Le champ est vide'
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    'username': new FormControl('', [Validators.required, nonBlank]),
    'password': new FormControl('', [Validators.required, nonBlank])
  })

  constructor( private _router: Router, private _sessionService: SessionService ) {
  }

  ngOnInit(): void {
  }

  onSubmit(){


    if( this.loginForm.valid ){

      this._sessionService.login( this.loginForm.value ).subscribe({
        next: () => {
          // this.router.navigate(['exo', this.formData.email.length == 5 ? 'panier' : 'root']); // localhost:4200/exo/panier ou /exo/root
          this._router.navigateByUrl('/exo/panier');
        },
        error: () => {
          this.loginForm.value.password = '';
          alert('identifiants invalides');
        }
      })

    }

    // if( this._sessionService.login( this.formData ) )
    //   // this.router.navigate(['exo', this.formData.email.length == 5 ? 'panier' : 'root']); // localhost:4200/exo/panier ou /exo/root
    //   this._router.navigateByUrl('/exo/panier');
    // else
    //   alert('identifiants invalides');
    
  }

}
