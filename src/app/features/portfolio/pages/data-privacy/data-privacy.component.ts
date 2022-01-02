import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeaderBackgroundColor } from '@shared/enums/header-background-color.enum';

@Component({
  selector: 'portfolio-data-privacy',
  templateUrl: './data-privacy.component.html',
  styleUrls: ['./data-privacy.component.scss'],
})
export class DataPrivacyComponent implements OnInit {
  HeaderBackgroundColor = HeaderBackgroundColor;

  constructor(title: Title) {
    title.setTitle('Datenschutz - Tomke Nils');
  }

  ngOnInit(): void {}
}
