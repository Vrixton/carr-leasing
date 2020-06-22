import { Component, OnInit } from '@angular/core';
import { Constants } from './../../config/constants';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brands: any = Constants.BRANDS;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
    nav: false,
  };
  constructor() {
    console.log(this.brands);
  }

  ngOnInit(): void {}
}
