import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
})
export class DateRangePickerComponent implements OnInit {
  @Output() dateRangeChanged = new EventEmitter<Date[]>();

  startDate!: Date | null;
  endDate!: Date | null;

  ngOnInit() {}

  protected setStartDate(date: MatDatepickerInputEvent<Date>): void {
    this.startDate = date.value;
    this.emitDateRange();
  }

  protected setEndDate(date: MatDatepickerInputEvent<Date>): void {
    this.endDate = date.value;
    this.emitDateRange();
  }

  private emitDateRange(): void {
    this.dateRangeChanged.emit([this.startDate as Date, this.endDate as Date]);
  }
}
