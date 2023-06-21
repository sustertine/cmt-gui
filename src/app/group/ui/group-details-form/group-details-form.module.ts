import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailsFormComponent } from './group-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [GroupDetailsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [GroupDetailsFormComponent],
})
export class GroupDetailsFormModule {}
