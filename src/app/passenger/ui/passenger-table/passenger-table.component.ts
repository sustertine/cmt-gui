import { Component } from '@angular/core';
import { Passenger } from '../../../models';

@Component({
  selector: 'app-passenger-table',
  templateUrl: './passenger-table.component.html',
  styleUrls: ['./passenger-table.component.scss'],
})
export class PassengerTableComponent {
  protected passengers: Array<Passenger> = [];
  protected displayedColumns: string[] = [
    'name',
    'surname',
    'birthDate',
    'phoneNumber',
    'parentPhoneNumber',
    'groupName',
    'travelGroup',
  ];

  constructor() {}

  protected edit(element: Passenger): void {}
}
