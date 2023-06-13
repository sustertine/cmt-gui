import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Group } from '../../models';
import { GroupService } from '../../data-access/group.service';
import { PeriodService } from '../../data-access/period.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  protected latestPeriod$ = this.periodService.findLatestPeriod().pipe(
    map((period) => {
      if (period.groupIds) {
        const groupObservables = period.groupIds.map((groupId) =>
          this.groupService.findGroupById(groupId)
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
