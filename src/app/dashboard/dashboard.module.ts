import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './views/dashboard-view.component';
import { PeriodModule } from '../period';

const COMPONENTS = [DashboardViewComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, DashboardRoutingModule, PeriodModule],
})
export class DashboardModule {}
