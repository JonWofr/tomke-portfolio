import { Component, Input, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';
import { SectionId } from '@shared/enums/section-id.enum';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  SectionId = SectionId;
  HeaderBackgroundColor = HeaderBackgroundColor;

  @Input() backgroundColor?: HeaderBackgroundColor;
  @Input() activeSectionId?: SectionId;

  shouldShowNavigationMenu = false;

  constructor() {}

  ngOnInit(): void {}

  toggleNavigationMenu() {
    this.shouldShowNavigationMenu = !this.shouldShowNavigationMenu;
  }
}
