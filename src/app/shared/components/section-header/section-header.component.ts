import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class SectionHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';

  constructor() {}

  ngOnInit(): void {}
}
