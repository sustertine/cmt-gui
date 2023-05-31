import { Component, OnInit } from '@angular/core';
import {
  BusTestData,
  BusTestDataService,
} from '../../test-data/bus-test-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss'],
})
export class GroupTableComponent implements OnInit {
  protected busses: Array<BusTestData> = [];
  protected displayedColumns: string[] = [
    'name',
    'guide',
    'paxCount',
    'staffCount',
    'paxStaffCount',
    // 'edit',
  ];

  constructor(
    private busTestDataService: BusTestDataService,
    private router: Router
  ) {}

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

  protected getTotalPAXCount(): number {
    return this.busses.map((btd) => btd.paxCount).reduce((a, b) => a + b, 0);
  }

  protected getTotalStaffCount(): number {
    return this.busses.map((btd) => btd.staffCount).reduce((a, b) => a + b, 0);
  }

  protected getTotalPAXStaffCount(): number {
    return this.busses
      .map((btd) => btd.paxStaffCount)
      .reduce((a, b) => a + b, 0);
  }

  protected edit(element: any): void {
    console.log('edit', element);
  }

  protected navigateToPeriod(element: any): void {
    this.router.navigate(['group', '123']);
  }
}
