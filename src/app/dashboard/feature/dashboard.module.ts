import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view.component';
import { GroupModule } from '../../group';
import { ComponentsModule } from '../../components';
import { MatGridListModule } from '@angular/material/grid-list';

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
  ],
})
export class DashboardModule {}
