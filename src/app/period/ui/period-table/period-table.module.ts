import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodTableComponent } from './period-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PeriodTableComponent],
  exports: [PeriodTableComponent],
  imports: [CommonModule, MatTableModule],
})
export class PeriodTableModule {}
