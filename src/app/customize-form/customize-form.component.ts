import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators, EmailValidator } from '@angular/forms';
import { Constants } from './../../config/constants';
import { SendEmailService } from '../services/send-email/send-email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
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
  activeSecondQ: boolean = false;

  constructor(
    private fb: FormBuilder,
    private sendEmail: SendEmailService,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
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
        brand: [null],
        model: [null],
        year: [null],
        mileage: [null],
        status: [null],
        exteriorColor: [null],
        interiorColor: [null],
        audioQuality: [null],
        specialFeatures: [null],
        brakes: [null],
        transmission: [null],
        driveSystem: [null],
      }),
      FinancingTerms: this.fb.group({
        duration: [null],
        annualMileage: [null],
        downPayment: [null],
        monthlyBudget: [null],
        prepaidMaintenance: [null],
        tireWheelProtection: [null],
        appearanceProtection: [null],
        excessWearTear: [null],
        dentDingProtection: [null],
      }),
      SecondVehicleInformation: this.fb.group({
        brand2: [null],
        model2: [null],
        year2: [null],
        mileage2: [null],
        status2: [null],
        exteriorColor2: [null],
        interiorColor2: [null],
        audioQuality2: [null],
        specialFeatures2: [null],
        brakes2: [null],
        transmission2: [null],
        driveSystem2: [null],
      }),
      SecondFinancingTerms: this.fb.group({
        duration2: [null],
        annualMileage2: [null],
        downPayment2: [null],
        monthlyBudget2: [null],
        prepaidMaintenance2: [null],
        tireWheelProtection2: [null],
        appearanceProtection2: [null],
        excessWearTear2: [null],
        dentDingProtection2: [null],
      }),
    });
  }
  sendQuote(data) {
    const emailData = {
      emailFrom: data.value.ContactInformation.email
        ? data.value.ContactInformation.email
        : 'undefined@undefined.com',
      nameFrom:
        data.value.ContactInformation.firstName +
        ' ' +
        data.value.ContactInformation.lastName
          ? data.value.ContactInformation.firstName +
            ' ' +
            data.value.ContactInformation.lastName
          : ' ',
      subject: 'Vehicle customization',
      content: data.value,
      tag: 'VehicleCustomization',
      secondQuote: this.activeSecondQ,
    };
    this.sendEmail.post(emailData).subscribe((response) => {
      document.getElementById('formCustomize').classList.add('hidden');
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
      this.close();
    });
  }
}
