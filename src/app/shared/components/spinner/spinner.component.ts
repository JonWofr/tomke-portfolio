import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() isEmbedded = false;

  constructor() {}

  ngOnInit(): void {}
}
