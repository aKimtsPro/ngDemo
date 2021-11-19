import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/api_service/session.service';

function pswdEqualsConfirm( control : AbstractControl ) : ValidationErrors | null {
  if( control.value.password == control.value.confirm )
    return null;

  return {
    pswdConfirm: 'not equals'
  }
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;

  constructor(formBuilder: FormBuilder, private _sessionService: SessionService, private _router: Router) {
    this.signupForm = formBuilder.group({
        'username': new FormControl( "ma valeur par défaut", [ Validators.minLength(5), Validators.maxLength(20), Validators.required ]),
        'password': new FormControl(null, [ Validators.minLength(8), Validators.required ]),
        'confirm': new FormControl( null, [ Validators.minLength(8), Validators.required ] ),
        'email': new FormControl( null, Validators.email ) 
      },
      {
        validators: [ pswdEqualsConfirm ]
      }
    )

  }

  

  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.signupForm);
    
    if( this.signupForm.valid ){
      try{
        this._sessionService.signup( {
          username: this.signupForm.value.username,
          password: this.signupForm.value.password,
          email: this.signupForm.value.email
        } );
        alert("vous êtes bien inscrit");
        this._router.navigateByUrl('');
      }catch(err){
        alert(err);
      }
      
    }

  }

}
