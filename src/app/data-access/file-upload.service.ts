import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  public parsePassengerCSV(file: any): Observable<Array<Passenger>> {
    return this.http.post<Array<Passenger>>(
      'http://localhost:8080/api/v1/passenger/parse-csv',
      file
    );
  }
}
