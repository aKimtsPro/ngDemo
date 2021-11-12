import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  listPers: Personne[] = [
    {
      nom: 'luc',
      age: 45
    },
    {
      nom: 'marie',
      age: 35
    },
    {
      nom: 'dominique',
      age: 55
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(toDelete: Personne){
    const index = this.listPers.indexOf( toDelete );
    if( index != -1 )
      this.listPers.splice(index, 1);
  }

}
