import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guide } from '../../../models';

@Component({
  selector: 'app-group-details-form',
  templateUrl: './group-details-form.component.html',
  styleUrls: ['./group-details-form.component.scss'],
})
export class GroupDetailsFormComponent implements OnInit {
  @Input() guideOptions = new Array<Guide>();

  formGroup = this.formBuilder.group({
    guideSelect: [''],
    staff: this.formBuilder.array([this.createStaffFormGroup()]),
    packages: this.formBuilder.array([]),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  protected get staffFormArrayGroups() {
    return (this.formGroup.get('staff') as FormArray).controls;
  }

  protected addStaffFormGroup(): void {
    const staff = this.formGroup.get('staff') as FormArray;
    staff.push(this.createStaffFormGroup());
  }

  protected removeStaffFormGroup(index: number): void {
    const staff = this.formGroup.get('staff') as FormArray;
    if (staff.length > 1) {
      staff.removeAt(index);
    } else {
      staff.reset();
    }
  }

  private createStaffFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
    });
  }
}
