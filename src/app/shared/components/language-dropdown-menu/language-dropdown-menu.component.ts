import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';

@Component({
  selector: 'shared-language-dropdown-menu',
  templateUrl: './language-dropdown-menu.component.html',
  styleUrls: ['./language-dropdown-menu.component.scss'],
})
export class LanguageDropdownMenuComponent implements OnInit {
  shouldShowMenu = false;
  selectedLanguage = 'DE';

  @Input() backgroundColor?: HeaderBackgroundColor;

  @ViewChild('menu') menu?: ElementRef<HTMLElement>;
  @HostListener('document:click', ['$event'])
  onClickDocument(event: MouseEvent) {
    if (
      this.shouldShowMenu &&
      !this.menu?.nativeElement.contains(event.target as any)
    ) {
      this.toggleMenu();
    }
  }

  constructor() {}

  ngOnInit(): void {}

  onClickSelectedLanguageButton(event: MouseEvent) {
    this.toggleMenu();
    event.stopPropagation();
  }

  toggleMenu() {
    this.shouldShowMenu = !this.shouldShowMenu;
  }
}
