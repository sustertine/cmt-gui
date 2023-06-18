import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view.component';
import { GroupModule } from '../../group';
import { ComponentsModule } from '../../components';
import { MatGridListModule } from '@angular/material/grid-list';
import { PeriodInfoModule } from '../../period/ui/period-info/period-info.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationModule } from '../../ui/navigation/navigation.module';

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
    MatButtonModule,
    MatIconModule,
    NavigationModule,
  ],
})
export class DashboardModule {}
