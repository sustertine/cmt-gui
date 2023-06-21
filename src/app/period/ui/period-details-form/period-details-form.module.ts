import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodDetailsFormComponent } from './period-details-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [PeriodDetailsFormComponent],
  exports: [PeriodDetailsFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
  ],
})
export class PeriodDetailsFormModule {}
