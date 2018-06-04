import { Component, OnInit } from '@angular/core';
import { Shirt } from '../../service/fashion-list/shirt';
import { FashionListService } from '../../service/fashion-list/fashion-list.service';

@Component({
  selector: 'app-fashion-list',
  templateUrl: './fashion-list.component.html',
  styleUrls: ['./fashion-list.component.css']
})
export class FashionListComponent implements OnInit {

  shirtlst:Shirt[] ;
  constructor( private fashionList:FashionListService) { }

  ngOnInit() {
  }

  loadShirts(){
    this.shirtlst = this.fashionList.getShirtList();
  }
}
