import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Period } from '../../models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss'],
})
export class GroupViewComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  protected periods$: Observable<Period[]> = this.http.get<Period[]>(
    'http://localhost:8080/api/v1/period'
  );
}
