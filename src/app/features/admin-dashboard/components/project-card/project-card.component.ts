import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'admin-dashboard-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project?: Project;
  @Input() shouldShowContextMenu = false;
  @Output() clickMoreButton = new EventEmitter<MouseEvent>();
  @Output() clickEditButton = new EventEmitter<void>();
  @Output() clickDeleteButton = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
