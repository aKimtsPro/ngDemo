import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-input-couleur',
  templateUrl: './input-couleur.component.html',
  styleUrls: ['./input-couleur.component.css']
})
export class InputCouleurComponent implements OnInit {

  inputColor = '';

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
  }

  validate() {
    this.colorService.validateColor( this.inputColor );
  }

}
