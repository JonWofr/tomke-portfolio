import { Component, Input, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() backgroundColor?: HeaderBackgroundColor;

  shouldShowNavigationMenu = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNavigationMenu() {
    this.shouldShowNavigationMenu = !this.shouldShowNavigationMenu;
  }
}
