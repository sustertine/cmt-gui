import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-period-details-form',
  templateUrl: './period-details-form.component.html',
  styleUrls: ['./period-details-form.component.scss'],
})
export class PeriodDetailsFormComponent {
  formGroup = this.formBuilder.group({
    name: [''],
    startDate: [''],
    endDate: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  public getFormGroup(): FormGroup {
    return this.formGroup;
  }
}
