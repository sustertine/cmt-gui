import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePeriodStepperComponent } from './create-period-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PeriodDetailsFormModule } from '../period-details-form/period-details-form.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreatePeriodStepperComponent],
  exports: [CreatePeriodStepperComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    PeriodDetailsFormModule,
    MatButtonModule,
  ],
})
export class CreatePeriodStepperModule {}
