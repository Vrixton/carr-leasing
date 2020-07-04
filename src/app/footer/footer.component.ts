import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { TermsComponent } from '../terms/terms.component';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private simpleModalService: SimpleModalService) {}
  showTerms() {
    let disposable = this.simpleModalService
      .addModal(TermsComponent)
      .subscribe((isConfirmed) => {});
  }
}
