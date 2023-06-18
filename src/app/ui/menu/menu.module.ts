import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatExpansionModule,
  ],
  exports: [MenuItemComponent],
})
export class MenuModule {}
