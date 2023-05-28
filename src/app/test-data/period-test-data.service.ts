import { Injectable } from '@angular/core';
import { TestDataProvider } from "./test-data-provider";
import { Period } from "../models";

@Injectable({
  providedIn: 'root'
})
export class PeriodTestDataService implements TestDataProvider<Period> {

  constructor() { }

  getTestData(): Array<Period> {
    return [
      {
        name: "Termin 1",
        startDate: new Date("2020-01-01"),
        endDate: new Date("2020-01-31"),
        groups: []
      },
      {
        name: "Termin 2",
        startDate: new Date("2020-02-01"),
        endDate: new Date("2020-02-28"),
        groups: []
      },
      {
        name: "Termin 3",
        startDate: new Date("2020-03-01"),
        endDate: new Date("2020-03-31"),
        groups: []
      },
      {
        name: "Termin 4",
        startDate: new Date("2020-04-01"),
        endDate: new Date("2020-04-30"),
        groups: []
      },
      {
        name: "Termin 5",
        startDate: new Date("2020-05-01"),
        endDate: new Date("2020-05-31"),
        groups: []
      }
    ];
  }

}
