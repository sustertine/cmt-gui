import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';

type TesData = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.scss'],
})
export class GroupViewComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private route: ActivatedRoute) {}

  protected getUrl(): Observable<UrlSegment[]> {
    return this.route.url;
  }
}
