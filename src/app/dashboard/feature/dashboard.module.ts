import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view.component';
import { GroupModule } from '../../group';
import { ComponentsModule } from '../../components';
import { MatGridListModule } from '@angular/material/grid-list';
import { PeriodInfoModule } from '../../period/ui/period-info/period-info.module';

const COMPONENTS = [DashboardViewComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GroupModule,
    ComponentsModule,
    MatGridListModule,
    PeriodInfoModule,
  ],
})
export class DashboardModule {}
