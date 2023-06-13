import { Component, Input } from '@angular/core';
import { Period } from '../../../models';

@Component({
  selector: 'app-period-info',
  templateUrl: './period-info.component.html',
  styleUrls: ['./period-info.component.scss'],
})
export class PeriodInfoComponent {
  @Input() period?: Period;
}
