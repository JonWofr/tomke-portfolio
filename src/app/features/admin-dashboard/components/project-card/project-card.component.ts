import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'admin-dashboard-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project?: Project;
  @Output() clickEditButton = new EventEmitter<void>();
  @Output() clickDeleteButton = new EventEmitter<void>();
  shouldShowContextMenu = false;

  constructor() {}

  ngOnInit(): void {}

  onClickMoreButton() {
    this.toggleContextMenu();
  }

  toggleContextMenu() {
    this.shouldShowContextMenu = !this.shouldShowContextMenu;
  }
}
