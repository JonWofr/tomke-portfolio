import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-dashboard-deletion-modal',
  templateUrl: './deletion-modal.component.html',
  styleUrls: ['./deletion-modal.component.scss'],
})
export class DeletionModalComponent implements OnInit {
  @Input() projectTitle = '';
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickDeleteButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
