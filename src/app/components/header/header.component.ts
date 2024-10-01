import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuMobile = false;
  open() {
    this.menuMobile = !this.menuMobile;
  }
  expanded: boolean = false;

  toggleMenu() {
    this.expanded = !this.expanded;
  }

  closeMenu() {
    this.expanded = false;
  }
}
