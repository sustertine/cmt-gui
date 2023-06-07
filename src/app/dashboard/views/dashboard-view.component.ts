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
  protected latestPeriod$ = this.periodService.getLatestPeriod().pipe(
    map((period) => {
      if (period.groupIds) {
        const groupObservables = period.groupIds.map((groupId) =>
          this.groupService.getGroupById(groupId)
        );

        this.latestPeriodGroups$ = combineLatest(groupObservables);
      }
      return period;
    })
  );

  protected latestPeriodGroups$?: Observable<Array<Group>>;

  ngOnInit() {}

  constructor(
    private periodService: PeriodService,
    private groupService: GroupService
  ) {}
}
