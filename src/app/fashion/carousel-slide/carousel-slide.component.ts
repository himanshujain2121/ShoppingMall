import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.css']
})
export class CarouselSlideComponent implements OnInit {

  images:Array<String> = new Array(
    '../../../assets/banner/banner1.jpg',
    '../../../assets/banner/banner2.jpg',
    '../../../assets/banner/banner3.jpg'
  );
  constructor() { }

  ngOnInit() {
  }

}
