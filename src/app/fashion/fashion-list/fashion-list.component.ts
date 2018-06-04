import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion-list',
  templateUrl: './fashion-list.component.html',
  styleUrls: ['./fashion-list.component.css']
})
export class FashionListComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  loadShirts(){
    this.route.navigate(['fashion/shirt-variety']);
  }
}
