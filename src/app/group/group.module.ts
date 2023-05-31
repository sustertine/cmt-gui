import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupTableComponent } from './components/group-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { GroupViewComponent } from './views/group-view.component';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [GroupTableComponent, GroupViewComponent];

const MODULES = [
  CommonModule,
  GroupRoutingModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  HttpClientModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [GroupTableComponent],
})
export class GroupModule {}
