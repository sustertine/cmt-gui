import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodHomeRoutingModule } from './period-home-routing.module';
import { PeriodHomeComponent } from './period-home.component';
import { PeriodTableModule } from '../../ui/period-table/period-table.module';
import { NavigationModule } from '../../../ui/navigation/navigation.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PeriodHomeComponent],
  imports: [
    CommonModule,
    PeriodHomeRoutingModule,
    PeriodTableModule,
    NavigationModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class PeriodHomeModule {}
