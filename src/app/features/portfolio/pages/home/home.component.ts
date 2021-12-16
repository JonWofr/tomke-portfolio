import { Component, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerBackgroundColor?: HeaderBackgroundColor;
  constructor() {}

  ngOnInit(): void {}

  onChangeHeroTitleIntersection(isIntersecting: boolean) {
    this.headerBackgroundColor = isIntersecting
      ? HeaderBackgroundColor.TRANSPARENT
      : HeaderBackgroundColor.WHITE;
  }
}
