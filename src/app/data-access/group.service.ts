import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  /**
   * Find all groups
   */
  public findGroups(): Observable<Array<Group>> {
    return this.http.get<Array<Group>>('http://localhost:8080/api/v1/group');
  }

  /**
   * Find a group by its id
   * @param id the id of the group
   */
  public findGroupById(id: number): Observable<Group> {
    return this.http.get<Group>(`http://localhost:8080/api/v1/group/${id}`);
  }
}
