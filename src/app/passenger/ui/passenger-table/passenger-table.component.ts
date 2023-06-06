import { Component } from '@angular/core';
import { PassengerTestDataService } from '../../../test-data/passenger-test-data.service';
import { Passenger } from '../../../models';

@Component({
  selector: 'app-passenger-table',
  templateUrl: './passenger-table.component.html',
  styleUrls: ['./passenger-table.component.scss'],
})
export class PassengerTableComponent {
  protected passengers: Array<Passenger> = this.ptds.getTestData();
  protected displayedColumns: string[] = [
    'name',
    'surname',
    'birthDate',
    'phoneNumber',
    'parentPhoneNumber',
    'groupName',
    'travelGroup',
  ];

  constructor(private ptds: PassengerTestDataService) {}

  protected edit(element: Passenger): void {}
}
