import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodHomeComponent } from './period-home.component';

const routes: Routes = [
  {
    path: '',
    component: PeriodHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodHomeRoutingModule {}
