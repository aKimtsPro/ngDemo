import { createSkipSelf } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  items = [
    {
      produit: {
        id: 1,
        nom: 'cerise',
        desc: null,
        prix: 1,
        qtt: 10,
        img: 'assets/img/cerise.jpg'
      },
      qttAVirer: 0
    },
    {
      produit: {
        id: 2,
        nom: 'citron',
        desc: null,
        prix: 12.0,
        qtt: 20,
        img: 'assets/img/citron.jpg'
      },
      qttAVirer: 0
    },
    {
      produit: {
        id: 3,
        nom: 'myrtille',
        desc: null,
        prix: 25.0,
        qtt: 8,
        img: 'assets/img/myrtille.jpg'
      },
      qttAVirer: 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(index: number){

    let item = this.items[index];
    if( item && item.produit.qtt > 0 ){
      item.produit.qtt -= item.qttAVirer;
      item.qttAVirer = 0;
    }
      

  }

}
