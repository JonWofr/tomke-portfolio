import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceTitle } from '@shared/enums/service-title.enum';

@Component({
  selector: 'admin-dashboard-service-chip',
  templateUrl: './service-chip.component.html',
  styleUrls: ['./service-chip.component.scss'],
})
export class ServiceChipComponent implements OnInit {
  @Input() service?: ServiceTitle;
  @Output() clickServiceChip = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
