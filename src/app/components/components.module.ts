import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NavShellComponent } from './nav/nav-shell.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateRangePickerComponent } from './inputs';
import { MatNativeDateModule } from '@angular/material/core';

const COMPONENTS = [NavShellComponent, DateRangePickerComponent];

const IMPORTS = [
  CommonModule,
  MatTableModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  RouterModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...IMPORTS],
})
export class ComponentsModule {}
