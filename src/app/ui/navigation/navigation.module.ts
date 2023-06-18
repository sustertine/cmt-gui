import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PageHeaderComponent } from './page-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const COMPONENTS = [HeaderComponent, PageHeaderComponent];

const IMPORTS = [CommonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS, MatMenuModule, MatIconModule, MatToolbarModule],
  exports: [HeaderComponent, PageHeaderComponent],
})
export class NavigationModule {}
