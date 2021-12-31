import { Component, OnInit } from '@angular/core';
import { Project } from '@shared/models/project.model';
import { ProjectsControllerService } from '@core/services/projects-controller/projects-controller.service';

@Component({
  selector: 'portfolio-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit {
  projects?: Project[];

  constructor(private projectsController: ProjectsControllerService) {}

  ngOnInit(): void {
    this.projectsController
      .fetchAllProjects('createdAt', 'desc')
      .subscribe((projects) => {
        this.projects = projects;
      });
  }
}
