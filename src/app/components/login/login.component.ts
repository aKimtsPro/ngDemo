import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData = {
    email: '',
    password: ''
  }

  constructor( private router: Router ) {
  }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.formData);

    if( this.formData.email == "email" && this.formData.password == "pass" ) {
      sessionStorage.setItem('connectedUser', this.formData.email);
      // this.router.navigate(['exo', this.formData.email.length == 5 ? 'panier' : 'root']); // localhost:4200/exo/panier ou /exo/root
      this.router.navigateByUrl('/exo/panier');
    }
    else {
      alert('identifiants invalides');
    }
  }

}
