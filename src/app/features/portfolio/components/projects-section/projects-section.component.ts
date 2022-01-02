import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '@shared/models/project.model';
import { ProjectsControllerService } from '@core/services/projects-controller/projects-controller.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'portfolio-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent implements OnInit, OnDestroy {
  projects?: Project[];
  projectsSubscription?: Subscription;

  constructor(private projectsController: ProjectsControllerService) {}

  ngOnInit(): void {
    this.projectsSubscription = this.projectsController
      .fetchAllProjects('createdAt', 'desc')
      .subscribe((projects) => {
        this.projects = projects;
      });
  }

  ngOnDestroy(): void {
    this.projectsSubscription?.unsubscribe();
  }
}
