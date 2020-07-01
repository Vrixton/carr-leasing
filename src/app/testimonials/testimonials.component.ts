import { Component, OnInit } from '@angular/core';
import { Constants } from './../../config/constants';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: any = Constants.TESTIMONIALS;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 12000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
  constructor() {}
}
