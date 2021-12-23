import { Component, OnInit } from '@angular/core';
import { projects } from '@features/portfolio/components/projects-section/projects-section.component';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'admin-dashboard-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss'],
})
export class ProjectGridComponent implements OnInit {
  projects: Project[] = [];

  constructor() {}

  ngOnInit(): void {
    // Fetch data
    this.projects = projects;
  }

  onClickAddProjectButton() {}
}
