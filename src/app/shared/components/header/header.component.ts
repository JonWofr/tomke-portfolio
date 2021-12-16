import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  shouldShowNavigationMenu = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNavigationMenu() {
    this.shouldShowNavigationMenu = !this.shouldShowNavigationMenu;
  }
}
