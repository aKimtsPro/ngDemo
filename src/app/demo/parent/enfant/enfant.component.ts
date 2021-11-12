import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../../models/personne.model';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Input('pers-to-display')
  personne: Personne = { nom: '', age: 0 };

  @Input()
  couleur: string = 'black';

  @Output('delete')
  deleteEmitter = new EventEmitter<Personne>();
  // creer la machine a trigger : EventEmitter(@angular/core !!!)
  // choisir le type d'info envoyée : <Personne>
  // en faire un event : @Output       (par défaut le nom est celui de la variable annoté)
  // dire quand on emet : voir delete()

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteEmitter.emit(this.personne);
  }

}
