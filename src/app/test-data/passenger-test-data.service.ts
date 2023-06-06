import { Injectable } from '@angular/core';
import { Passenger } from '../models';
import { TestDataProvider } from './test-data-provider';

@Injectable({
  providedIn: 'root',
})
export class PassengerTestDataService implements TestDataProvider<Passenger> {
  getTestData(): Array<Passenger> {
    return [
      {
        id: 1,
        name: 'John',
        surname: 'Doe',
        birthDate: '1990-01-01',
        phoneNumber: '123456789',
        parentPhoneNumber: '987654321',
        groupName: 'ANKARA/ATATURK/5A',
        travelGroup: '2021 ANKARA 12',
      },
      {
        id: 2,
        name: 'Jane',
        surname: 'Doe',
        birthDate: '1990-01-01',
        phoneNumber: '123456789',
        parentPhoneNumber: '987654321',
        groupName: 'ANKARA/ATATURK/5A',
        travelGroup: '2021 ANKARA 121',
      },
      {
        id: 3,
        name: 'Miki',
        surname: 'Miška',
        birthDate: '1990-01-01',
        phoneNumber: '123456789',
        parentPhoneNumber: '987654321',
        groupName: 'ANKARA/ATATURK/5A',
        travelGroup: '2021 ANKARA 12',
      },
      {
        id: 4,
        name: 'Lepi',
        surname: 'Dasa',
        birthDate: '1990-01-01',
        phoneNumber: '123456789',
        parentPhoneNumber: '987654321',
        groupName: 'ANKARA/ATATURK/5A',
        travelGroup: '2021 ANKARA 12',
      },
      {
        id: 5,
        name: 'Primož',
        surname: 'Roglič',
        birthDate: '1990-01-01',
        phoneNumber: '123456789',
        parentPhoneNumber: '987654321',
        groupName: 'ANKARA/ATATURK/5A',
        travelGroup: '2021 ANKARA 12',
      },
    ];
  }
  constructor() {}
}
