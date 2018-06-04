import { Component, OnInit } from '@angular/core';
import { FashionListService } from '../../service/fashion-list/fashion-list.service';
import { Shirt } from '../../service/fashion-list/shirt';

@Component({
  selector: 'app-shirt-variety',
  templateUrl: './shirt-variety.component.html',
  styleUrls: ['./shirt-variety.component.css']
})
export class ShirtVarietyComponent implements OnInit {

  shirtlst:Shirt[];
  constructor(private fashionList:FashionListService) { }

  ngOnInit() {
    this.shirtlst = this.fashionList.getShirtList();
  }

}
