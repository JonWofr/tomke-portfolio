import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';

@Component({
  selector: 'shared-language-dropdown-menu',
  templateUrl: './language-dropdown-menu.component.html',
  styleUrls: ['./language-dropdown-menu.component.scss'],
})
export class LanguageDropdownMenuComponent implements OnInit {
  shouldShowMenu = false;
  selectedLanguage = 'DE';
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

  constructor(router: Router) {
    this.currentRoute = router.url;
    console.log(this.currentRoute);
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
