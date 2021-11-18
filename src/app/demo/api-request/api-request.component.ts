import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';
import { UserService } from 'src/app/services/user.service';
import { ApiUser } from '../models/api-user.model';

@Component({
  selector: 'app-api-request',
  templateUrl: './api-request.component.html',
  styleUrls: ['./api-request.component.css']
})
export class ApiRequestComponent implements OnInit {

  listUser : ApiUser[] = [];
  userForm : FormGroup;

  constructor(builder: FormBuilder, private _userService: UserService, private _cServ : ChambreService) {
    this.userForm = builder.group({
      'name': new FormControl(),
      'username': new FormControl(),
      'email': new FormControl('', Validators.email),
      'tel': new FormControl(),
      'site': new FormControl()
    });
  }

  ngOnInit(): void {
  }

  sendRequest(){

    this._userService.getUsers().subscribe({
      next: response => this.listUser = response,
      error: error => console.log(error),
      complete: () => console.log("complete")
    });

  }

  chamber(){
    this._cServ.getAll().subscribe({
      next: (chambres) => console.log(chambres),
      error: error => console.error(error),
      complete: () => console.log("complete")
    });
  }

  onSubmit(){

    if( this.userForm.valid ){
      const v = this.userForm.value;
      this._userService.postUser( {
        id: 0,
        name: v.name,
        username: v.username,
        email: v.email,
        phone: v.tel,
        website: v.site,
        address: {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        company: {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      } ).subscribe({
        next: console.log,
        error: console.error
      })
    }

  }

}
