import { Component, Input } from '@angular/core';
import { Menu, MenuItem } from '../layout/menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() menu?: Menu = [];

  public notEmptyMenu(item?: MenuItem): boolean {
    if (item === undefined) return false;
    if (item.subMenu === undefined) return false;
    return item.subMenu.length > 0;
  }
}
