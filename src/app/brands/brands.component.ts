import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { CustomizeFormComponent } from '../customize-form/customize-form.component';
import { Constants } from './../../config/constants';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {
  brands: any = Constants.BRAND_IMAGES;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3,
      },
    },
    nav: false,
  };
  constructor(private simpleModalService: SimpleModalService) {}

  ngOnInit(): void {}
  showConfirm() {
    let disposable = this.simpleModalService
      .addModal(CustomizeFormComponent)
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          alert('accepted');
        }
      });
  }
}
