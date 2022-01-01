import { Component, Input, OnInit } from '@angular/core';
import { SpinnerOverlayColor } from '@shared/enums/spinner-overlay-color.enum';

@Component({
  selector: 'shared-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  SpinnerOverlayColor = SpinnerOverlayColor;

  @Input() isEmbedded = false;
  @Input() overlayColor = SpinnerOverlayColor.TRANSPARENT;
  constructor() {}

  ngOnInit(): void {}
}
