import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';
import { LOCALE_ID } from '@angular/core';

@Component({
  selector: 'shared-language-dropdown-menu',
  templateUrl: './language-dropdown-menu.component.html',
  styleUrls: ['./language-dropdown-menu.component.scss'],
})
export class LanguageDropdownMenuComponent implements OnInit {
  shouldShowMenu = false;
  currentRoute?: string;

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

  constructor(router: Router, @Inject(LOCALE_ID) public localeId: string) {
    this.currentRoute = router.url;
  }

  ngOnInit(): void {}

  onClickSelectedLanguageButton(event: MouseEvent) {
    this.toggleMenu();
    event.stopPropagation();
  }

  toggleMenu() {
    this.shouldShowMenu = !this.shouldShowMenu;
  }
}
