import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-period-details-form',
  templateUrl: './period-details-form.component.html',
  styleUrls: ['./period-details-form.component.scss'],
})
export class PeriodDetailsFormComponent {
  periodDetailsForm = this.formBuilder.group({
    name: [''],
    startDate: [''],
    endDate: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  public printFormValue() {
    console.log(this.periodDetailsForm.value);
  }
}
