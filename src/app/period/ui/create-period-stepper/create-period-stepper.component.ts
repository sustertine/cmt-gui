import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PeriodDetailsFormComponent } from '../period-details-form/period-details-form.component';
import { GuideService } from '../../../data-access/guide.service';

@Component({
  selector: 'app-create-period-stepper',
  templateUrl: './create-period-stepper.component.html',
  styleUrls: ['./create-period-stepper.component.scss'],
})
export class CreatePeriodStepperComponent {
  @ViewChild('detailsForm') detailsForm?: PeriodDetailsFormComponent;

  public detailsFormGroup: FormGroup = new FormGroup<any>({});

  public guides$ = this.guideService.findAll();

  constructor(private guideService: GuideService) {}

  ngAfterViewInit(): void {
    if (this.detailsForm) {
      this.detailsFormGroup = this.detailsForm?.getFormGroup();
    }
  }
}
