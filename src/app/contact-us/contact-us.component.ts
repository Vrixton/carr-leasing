import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SendEmailService } from '../services/send-email/send-email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactUsData: FormGroup;
  durationInSeconds = 5;

  constructor(
    private fb: FormBuilder,
    private sendEmail: SendEmailService,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.contactUsData = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      message: [null, Validators.required],
    });
  }
  sendContactUs(data) {
    this.sendEmail.postContactUs(data.value).subscribe((response) => {
      this.showSuccessMessage();
    });
  }

  showSuccessMessage() {
    this.translate.get('SUCCESS_MESSAGE_1').subscribe((res: string) => {
      this._snackBar.open(res, '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }
}
