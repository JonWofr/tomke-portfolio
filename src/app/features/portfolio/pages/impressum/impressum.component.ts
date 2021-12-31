import { Component, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';

@Component({
  selector: 'portfolio-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {
  HeaderBackgroundColor = HeaderBackgroundColor;

  constructor() {}

  ngOnInit(): void {}
}
