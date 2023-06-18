import { Component, Input, OnInit } from '@angular/core';
import { Period } from '../../../models';
import { PeriodService } from '../../../data-access/period.service';

@Component({
  selector: 'app-period-table',
  templateUrl: './period-table.component.html',
  styleUrls: ['./period-table.component.scss'],
})
export class PeriodTableComponent {
  @Input() periods: Array<Period> = [];
  protected displayedColumns: string[] = ['name', 'startDate', 'endDate'];

  constructor() {}
}
