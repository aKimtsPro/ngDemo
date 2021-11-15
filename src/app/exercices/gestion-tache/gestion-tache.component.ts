import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-tache',
  templateUrl: './gestion-tache.component.html',
  styleUrls: ['./gestion-tache.component.css']
})
export class GestionTacheComponent implements OnInit {

  listTache: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddToStart(tache: string){ 
    this.listTache.unshift(tache);
  }

  onAddToEnd(tache: string){
    this.listTache.push(tache);
  }

  increasePriority( of: number ){
    if( of != 0 ){
      
      const temp = this.listTache[of];
      this.listTache[of] = this.listTache[of-1];
      this.listTache[of-1] = temp;

    }
  }

  decreasePriority( of: number ){
    if( of != this.listTache.length-1 ){

      const temp = this.listTache[of];
      this.listTache[of] = this.listTache[of+1];
      this.listTache[of+1] = temp;

    }
  }

}
