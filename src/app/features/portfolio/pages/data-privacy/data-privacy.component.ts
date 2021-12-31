import { Component, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';

@Component({
  selector: 'portfolio-data-privacy',
  templateUrl: './data-privacy.component.html',
  styleUrls: ['./data-privacy.component.scss'],
})
export class DataPrivacyComponent implements OnInit {
  HeaderBackgroundColor = HeaderBackgroundColor;

  constructor() {}

  ngOnInit(): void {}
}
