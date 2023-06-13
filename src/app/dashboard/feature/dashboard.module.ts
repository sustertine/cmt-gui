import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view.component';
import { PeriodModule } from '../../period';
import { GroupModule } from '../../group';
import { ComponentsModule } from '../../components';

const COMPONENTS = [DashboardViewComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PeriodModule,
    GroupModule,
    ComponentsModule,
  ],
})
export class DashboardModule {}
