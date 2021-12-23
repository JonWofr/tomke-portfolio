import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-dashboard-project-modal-image',
  templateUrl: './project-modal-image.component.html',
  styleUrls: ['./project-modal-image.component.scss'],
})
export class ProjectModalImageComponent implements OnInit {
  @Input() imageUrl?: string;
  @Output() clickRemoveButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
