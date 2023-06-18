import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodCreatorRoutingModule } from './period-creator-routing.module';
import { PeriodCreatorComponent } from './period-creator.component';
import { MatButtonModule } from '@angular/material/button';
import { NavigationModule } from '../../../ui/navigation/navigation.module';
import { CreatePeriodStepperModule } from '../../ui/create-period-stepper/create-period-stepper.module';

@NgModule({
  declarations: [PeriodCreatorComponent],
  imports: [
    CommonModule,
    PeriodCreatorRoutingModule,
    MatButtonModule,
    NavigationModule,
    CreatePeriodStepperModule,
  ],
})
export class PeriodCreatorModule {}
