import { Component, OnInit } from '@angular/core';
import { PeriodService } from '../../period/data-access';
import { combineLatest, map, mergeMap, Observable } from 'rxjs';
import { GroupService } from '../../group/data-access';
import { Group } from '../../models';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  protected latestPeriod$ = this.periodService.getLatestPeriod();
  protected latestPeriodGroups$: Observable<Array<Group>> =
    this.latestPeriod$.pipe(
      map(({ groupIds }) =>
        groupIds.map((id) => this.groupService.getGroupById(id))
      ),
      mergeMap((groupObservables) => combineLatest(groupObservables))
    );

  ngOnInit() {}

  constructor(
    private periodService: PeriodService,
    private groupService: GroupService
  ) {}
}
