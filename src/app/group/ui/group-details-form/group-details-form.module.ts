import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailsFormComponent } from './group-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [GroupDetailsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [GroupDetailsFormComponent],
})
export class GroupDetailsFormModule {}
