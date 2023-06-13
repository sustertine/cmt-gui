import { Injectable } from '@angular/core';
import { combineLatest, forkJoin, map, Observable, shareReplay } from 'rxjs';
import { Group, Period } from '../../models';
import { PeriodService } from '../../data-access/period.service';
import { GroupService } from '../../data-access/group.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  private period$!: Observable<Period>;
  private groups$!: Observable<Array<Group>>;

  constructor(
    private periodService: PeriodService,
    private groupService: GroupService
  ) {}

  public getDashboardData(): Observable<[Period, Array<Group>]> {
    if (!this.period$) {
      this.period$ = this.periodService.findLatestPeriod().pipe(shareReplay(1));
    }

    if (!this.groups$) {
      this.period$.pipe(
        map((period: Period) => {
          if (period.groupIds) {
            const groupObservables = period.groupIds.map((groupId) =>
              this.groupService.findGroupById(groupId)
            );

            this.groups$ = combineLatest(groupObservables);
          }
          return period;
        })
      );
    }

    return forkJoin([this.period$, this.groups$]);
  }
}
