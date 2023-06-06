import { Injectable } from '@angular/core';
import { TestDataProvider } from './test-data-provider';
import { Period } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PeriodTestDataService implements TestDataProvider<Period> {
  constructor() {}

  getTestData(): Array<Period> {
    return [
      {
        id: 1,
        startDate: '2020-01-01',
        endDate: '2020-01-31',
        groupIds: [],
      },
      {
        id: 2,
        startDate: '2020-02-01',
        endDate: '2020-02-29',
        groupIds: [],
      },
      {
        id: 3,
        startDate: '2020-03-01',
        endDate: '2020-03-31',
        groupIds: [],
      },
      {
        id: 4,
        startDate: '2020-04-01',
        endDate: '2020-04-30',
        groupIds: [],
      },
      {
        id: 5,
        startDate: '2020-05-01',
        endDate: '2020-05-31',
        groupIds: [],
      },
    ];
  }
}
