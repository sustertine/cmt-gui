import { Injectable } from '@angular/core';
import { Group, Period } from '../../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeriodService {
  constructor(private http: HttpClient) {}

  public getLatestPeriod(): Observable<Period> {
    return this.http.get<Period>('http://localhost:8080/api/v1/period/latest');
  }

  public getPeriodGroups(periodId: number): Observable<Array<Group>> {
    return this.http.get<Array<Group>>(
      `http://localhost:8080/api/v1/period/${periodId}/groups`
    );
  }
}
