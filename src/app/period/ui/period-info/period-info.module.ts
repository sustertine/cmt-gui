import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodInfoComponent } from './period-info.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PeriodInfoComponent],
  imports: [CommonModule, MatCardModule],
})
export class PeriodInfoModule {}
