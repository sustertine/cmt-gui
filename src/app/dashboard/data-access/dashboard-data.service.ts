import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { Group, Period } from '../../models';
import { PeriodService } from '../../data-access/period.service';
import { GroupService } from '../../data-access/group.service';

/**
 * TODO: This doesn't work; research a better way to encapsulate data retrieval
 */
@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  private latestPeriod$: Observable<Period> = this.periodService
    .findLatestPeriod()
    .pipe(
      map((period) => {
        if (period.groupIds) {
          const groupObservables = period.groupIds.map((groupId) =>
            this.groupService.findGroupById(groupId)
          );
          this.groups$ = combineLatest(groupObservables);
        }
        return period;
      })
    );

  private groups$!: Observable<Array<Group>>;

  constructor(
    private periodService: PeriodService,
    private groupService: GroupService
  ) {}

  public getDashboardData(): Observable<[Period, Array<Group>]> {
    return combineLatest(this.latestPeriod$, this.groups$);
  }
}
