import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guide } from '../../../models';

@Component({
  selector: 'app-group-details-form',
  templateUrl: './group-details-form.component.html',
  styleUrls: ['./group-details-form.component.scss'],
})
export class GroupDetailsFormComponent {
  @Input() guideOptions = new Array<Guide>();

  formGroup = this.formBuilder.group({
    guideSelect: [''],
    staffNames: this.formBuilder.array([]),
    staffSurnames: this.formBuilder.array([]),
    staffPhoneNumbers: this.formBuilder.array([]),
  });

  constructor(private formBuilder: FormBuilder) {}

  protected addStaffFormGroup(): void {
    const nameControl = this.formBuilder.control('', Validators.required);
    const surnameControl = this.formBuilder.control('', Validators.required);
    const phoneNumberControl = this.formBuilder.control(
      '',
      Validators.required
    );

    (this.formGroup.get('staffNames') as FormArray).push(nameControl);
    (this.formGroup.get('staffSurnames') as FormArray).push(surnameControl);
    (this.formGroup.get('staffPhoneNumbers') as FormArray).push(
      phoneNumberControl
    );
  }

  protected get nameControls() {
    return (this.formGroup.get('staffNames') as FormArray).controls;
  }
}
