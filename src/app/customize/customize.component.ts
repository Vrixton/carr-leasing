import { Component } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { CustomizeFormComponent } from '../customize-form/customize-form.component';
@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent {
  constructor(private simpleModalService: SimpleModalService) {}
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
