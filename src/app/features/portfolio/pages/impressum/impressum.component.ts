import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';

@Component({
  selector: 'portfolio-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {
  HeaderBackgroundColor = HeaderBackgroundColor;

  constructor(title: Title) {
    title.setTitle('Impressum - Tomke Nils');
  }

  ngOnInit(): void {}
}
