import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guide } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GuideService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Array<Guide>> {
    return this.http.get<Array<Guide>>('http://localhost:8080/api/v1/guide');
  }
}
