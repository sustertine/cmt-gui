import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodViewComponent } from './views';

const routes: Routes = [
  {
    path: '',
    component: PeriodViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodRoutingModule {}
