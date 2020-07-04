import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface ConfirmModel {
  title: string;
  message: string;
}
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent extends SimpleModalComponent<ConfirmModel, boolean>
  implements ConfirmModel {
  title: string;
  message: string;
  constructor() {
    super();
  }
}
