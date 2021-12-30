import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'admin-dashboard-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  @Input() projects?: Project[];
  @Output() clickProjectCardEditButton = new EventEmitter<Project>();
  @Output() clickProjectCardDeleteButton = new EventEmitter<Project>();
  @Output() clickAddProjectCard = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
