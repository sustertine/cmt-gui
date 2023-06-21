import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Guide } from '../../../models';

@Component({
  selector: 'app-group-details-form',
  templateUrl: './group-details-form.component.html',
  styleUrls: ['./group-details-form.component.scss'],
})
export class GroupDetailsFormComponent {
  @Input() guides = new Array<Guide>();

  formGroup = this.formBuilder.group({
    guideSelect: [''],
  });

  constructor(private formBuilder: FormBuilder) {}
}
