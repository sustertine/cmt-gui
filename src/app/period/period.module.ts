import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodRoutingModule } from './period-routing.module';
import { PeriodTableComponent } from './components/tables';
import { PeriodViewComponent } from './views/period-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

const COMPONENTS = [PeriodTableComponent, PeriodViewComponent];

const IMPORTS = [
  CommonModule,
  PeriodRoutingModule,
  MatIconModule,
  MatTableModule,
  MatButtonModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...IMPORTS],
})
export class PeriodModule {}
