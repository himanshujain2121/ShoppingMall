import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shirt } from '../../service/fashion-list/shirt';
import { FashionListService } from '../../service/fashion-list/fashion-list.service';

@Component({
  selector: 'app-shirt-description',
  templateUrl: './shirt-description.component.html',
  styleUrls: ['./shirt-description.component.css']
})
export class ShirtDescriptionComponent implements OnInit {

  shirtId:number;
  shirtDescription:Shirt;
  constructor(private route:ActivatedRoute,private shirtVariety:FashionListService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (res)=>{
        this.shirtId = + res.get('id');
        this.shirtDescription = this.shirtVariety.getShirtList().find(x=>x.id == this.shirtId);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
