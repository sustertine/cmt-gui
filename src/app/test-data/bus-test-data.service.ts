import { Injectable } from '@angular/core';
import { TestDataProvider } from './test-data-provider';

export type BusTestData = {
  name: string;
  guide: string;
  paxCount: number;
  staffCount: number;
  paxStaffCount: number;
};

@Injectable({
  providedIn: 'root',
})
export class BusTestDataService implements TestDataProvider<BusTestData> {
  getTestData(): Array<BusTestData> {
    return [
      {
        name: 'BUS 1',
        guide: 'John Doe',
        paxCount: 20,
        staffCount: 1,
        paxStaffCount: 21,
      },
      {
        name: 'BUS 2',
        guide: 'Janez Novak',
        paxCount: 39,
        staffCount: 1,
        paxStaffCount: 40,
      },
      {
        name: 'BUS 3',
        guide: 'Jane Doe',
        paxCount: 59,
        staffCount: 1,
        paxStaffCount: 60,
      },
      {
        name: 'BUS 4',
        guide: 'Miki Miška',
        paxCount: 660,
        staffCount: 1,
        paxStaffCount: 661,
      },
      {
        name: 'BUS 5',
        guide: 'Nodi',
        paxCount: 660,
        staffCount: 1,
        paxStaffCount: 661,
      },
    ];
  }
  constructor() {}
}
