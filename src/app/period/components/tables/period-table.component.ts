import { Component, OnInit } from '@angular/core';
import { PeriodTestDataService } from '../../../test-data';
import { Period } from '../../../models';
import {
  BusTestData,
  BusTestDataService,
} from '../../../test-data/bus-test-data.service';

@Component({
  selector: 'app-period-table',
  styleUrls: ['./period-table.component.scss'],
  templateUrl: './period-table.component.html',
})
export class PeriodTableComponent implements OnInit {
  protected busses: Array<BusTestData> = [];
  protected displayedColumns: string[] = [
    'name',
    'guide',
    'paxCount',
    'staffCount',
    'paxStaffCount',
  ];

  constructor(private busTestDataService: BusTestDataService) {}

  ngOnInit(): void {
    this.busses = this.busTestDataService
      .getTestData()
      .map((btd: BusTestData, index) => {
        return {
          ...btd,
          id: index + 1,
        };
      });
  }

  protected edit(element: Period) {
    console.log('edit: ', element.startDate.toDateString());
  }
}
