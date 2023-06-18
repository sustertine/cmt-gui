import { Component, OnInit } from '@angular/core';
import { PeriodService } from '../../../data-access/period.service';

@Component({
  selector: 'app-period-home',
  templateUrl: './period-home.component.html',
  styleUrls: ['./period-home.component.scss'],
})
export class PeriodHomeComponent implements OnInit {
  protected periods$ = this.periodService.findAllPeriods();

  constructor(private periodService: PeriodService) {}

  ngOnInit(): void {}
}
