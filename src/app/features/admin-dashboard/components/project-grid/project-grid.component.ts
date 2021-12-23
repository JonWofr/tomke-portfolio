import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'admin-dashboard-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss'],
})
export class ProjectGridComponent implements OnInit {
  @Input() projects: Project[] = [];
  @Output() clickProjectCardEditButton = new EventEmitter<Project>();
  @Output() clickProjectCardDeleteButton = new EventEmitter<Project>();
  @Output() clickAddProjectCard = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
