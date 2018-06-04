import { Injectable } from '@angular/core';
import { Shirt } from './shirt';

@Injectable()
export class FashionListService {

  constructor() { }

  shirtList: Shirt[] = [
    { id: 1, color: 'red', size: 'L', company: 'levis', price: 500 },
    { id: 2, color: 'blue', size: 'M', company: 'park avenue', price: 350 },
    { id: 3, color: 'green', size: 'XL', company: 'reebok', price: 800 },
    { id: 4, color: 'white', size: 'L', company: 'amazon', price: 359 },
    { id: 5, color: 'black', size: 'XXL', company: 'peter england', price: 890 }
  ];

  getShirtList() {
    return this.shirtList;
  }
}
