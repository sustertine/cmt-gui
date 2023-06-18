import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavigationModule } from '../navigation/navigation.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NavigationModule,
    MatSidenavModule,
    RouterOutlet,
    MenuModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
