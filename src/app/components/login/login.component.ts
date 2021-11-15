import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials.model';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: Credentials = {
    username: '',
    password: ''
  }

  constructor( private _router: Router, private _sessionService: SessionService ) {
  }

  ngOnInit(): void {
  }

  onSubmit(){

    if( this._sessionService.login( this.formData ) )
      // this.router.navigate(['exo', this.formData.email.length == 5 ? 'panier' : 'root']); // localhost:4200/exo/panier ou /exo/root
      this._router.navigateByUrl('/exo/panier');
    else
      alert('identifiants invalides');
    
  }

}
