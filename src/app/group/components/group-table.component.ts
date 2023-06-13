import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../../models';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss'],
})
export class GroupTableComponent implements OnInit {
  @Input() groups: Array<Group> = [];
  protected displayedColumns: string[] = [
    'name',
    'guide',
    'paxCount',
    'staffCount',
    'paxStaffCount',
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  protected getTotalPAXCount(): number {
    return this.groups.reduce((a, b) => a + b.passengerIds.length, 0);
  }

  protected getTotalStaffCount(): number {
    return this.groups.reduce((a, b) => a + b.staffIds.length, 0);
  }

  protected getTotalPAXStaffCount(): number {
    return this.groups.reduce(
      (a, b) => a + b.passengerIds.length + b.staffIds.length,
      0
    );
  }

  protected edit(element: any): void {
    console.log('edit', element);
  }

  protected navigateToPeriod(element: any): void {
    this.router.navigate(['group', '123']);
  }
}
