import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodInfoComponent } from './period-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PeriodInfoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [PeriodInfoComponent],
})
export class PeriodInfoModule {}
