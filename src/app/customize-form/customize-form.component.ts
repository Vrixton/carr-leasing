import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, EmailValidator } from '@angular/forms';
import { Constants } from './../../config/constants';
import { SendEmailService } from '../services/send-email/send-email.service';
export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-customize-form',
  templateUrl: './customize-form.component.html',
  styleUrls: ['./customize-form.component.scss'],
})
export class CustomizeFormComponent
  extends SimpleModalComponent<ConfirmModel, boolean>
  implements ConfirmModel {
  title: string;
  message: string;
  customizeData: FormGroup;
  states: any = Constants.STATES;
  brands: any = Constants.BRANDS;
  years: any = Constants.YEARS;
  audioQualities: any = Constants.AUDIO_QUALITIES;
  brakes: any = Constants.BRAKES;
  transmissions: any = Constants.TRANSMISSIONS;
  driveSystems: any = Constants.DRIVE_SYSTEMS;
  durations: any = Constants.DURATIONS;

  constructor(private fb: FormBuilder, private sendEmail: SendEmailService) {
    super();
  }
  ngOnInit(): void {
    this.customizeData = this.fb.group({
      ContactInformation: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, Validators.required],
        phone: [null, Validators.required],
        state: [null, Validators.required],
        city: [null, Validators.required],
      }),
      VehicleInformation: this.fb.group({
        brand: [null, Validators.required],
        model: [null, Validators.required],
        year: [null, Validators.required],
        mileage: [null, Validators.required],
        status: [null, Validators.required],
        exteriorColor: [null, Validators.required],
        interiorColor: [null, Validators.required],
        audioQuality: [null, Validators.required],
        specialFeatures: [null, Validators.required],
        brakes: [null, Validators.required],
        transmission: [null, Validators.required],
        driveSystem: [null, Validators.required],
      }),
      FinancingTerms: this.fb.group({
        duration: [null, Validators.required],
        annualMileage: [null, Validators.required],
        downPayment: [null, Validators.required],
        monthlyBudget: [null, Validators.required],
        prepaidMaintenance: [null, Validators.required],
        tireWheelProtection: [null, Validators.required],
        appearanceProtection: [null, Validators.required],
        excessWearTear: [null, Validators.required],
        dentDingProtection: [null, Validators.required],
      }),
    });
  }
  sendQuote(data) {
    this.sendEmail
      .post(
        data.value.ContactInformation.firstName +
          ' ' +
          data.value.ContactInformation.firstName,
        data.value.ContactInformation.email,
        'CUSTOMIZE CAR',
        'Aqui va el contenido...',
        'CUSTOMIZE_CAR'
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
