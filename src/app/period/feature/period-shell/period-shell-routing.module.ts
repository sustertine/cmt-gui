import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../period-home/period-home.module').then(
            (m) => m.PeriodHomeModule
          ),
      },
      {
        path: 'create',
        loadChildren: () =>
          import('../period-creator/period-creator.module').then(
            (m) => m.PeriodCreatorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodShellRoutingModule {}
