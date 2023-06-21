import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePeriodStepperComponent } from './create-period-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PeriodDetailsFormModule } from '../period-details-form/period-details-form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GroupDetailsFormModule } from '../../../group/ui/group-details-form/group-details-form.module';

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
    MatInputModule,
    GroupDetailsFormModule,
  ],
})
export class CreatePeriodStepperModule {}
