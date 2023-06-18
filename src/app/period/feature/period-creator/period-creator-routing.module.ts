import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodCreatorComponent } from './period-creator.component';

const routes: Routes = [
  {
    path: '',
    component: PeriodCreatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodCreatorRoutingModule {}
