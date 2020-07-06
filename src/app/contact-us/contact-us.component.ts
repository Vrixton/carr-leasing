import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, EmailValidator } from '@angular/forms';
import { SendEmailService } from '../services/send-email/send-email.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(private fb: FormBuilder, private sendEmail: SendEmailService) {}

  ngOnInit(): void {}
}
