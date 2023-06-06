import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  public getGroupById(id: number): Observable<Group> {
    return this.http.get<Group>(`http://localhost:8080/api/v1/group/${id}`);
  }
}
