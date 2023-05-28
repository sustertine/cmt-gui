import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupViewComponent } from './views';

const routes: Routes = [{ path: ':id', component: GroupViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule {}
