import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-cadre-couleur',
  templateUrl: './cadre-couleur.component.html',
  styleUrls: ['./cadre-couleur.component.css']
})
export class CadreCouleurComponent implements OnInit {

  colorCadre = '#000000';

  constructor(colorService: ColorService) {
    colorService.subscribeToColorChanged( (color) => this.colorCadre = color );
  }

  ngOnInit(): void {
  }

}
