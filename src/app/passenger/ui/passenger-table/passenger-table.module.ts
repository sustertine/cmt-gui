import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerTableComponent } from './passenger-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PassengerTableComponent],
  imports: [CommonModule, MatIconModule, MatTableModule],
  exports: [PassengerTableComponent],
})
export class PassengerTableModule {}
