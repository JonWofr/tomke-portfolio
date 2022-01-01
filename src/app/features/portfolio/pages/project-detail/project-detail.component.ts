import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '@shared/models/project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { SocialMediaIconsColor } from '@shared/enums/social-media-icons-color.enum';
import { ProjectsControllerService } from '@core/services/projects-controller/projects-controller.service';
import { SpinnerOverlayColor } from '@shared/enums/spinner-overlay-color.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'portfolio-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  SocialMediaIconsColor = SocialMediaIconsColor;
  SpinnerOverlayColor = SpinnerOverlayColor;

  project?: Project;
  projectSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private title: Title,
    private projectsController: ProjectsControllerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.router.navigateByUrl('/');
      return;
    }
    this.projectSubscription = this.projectsController
      .fetchOneProject(id)
      .subscribe((project) => {
        console.log('project detail page next function call', project);
        if (project === undefined) {
          this.router.navigateByUrl('/');
          return;
        }
        this.project = project;
        this.title.setTitle(`${this.project!.title} - Tomke Nils`);
      });
  }

  ngOnDestroy(): void {
    this.projectSubscription?.unsubscribe();
  }

  navigateBack() {
    this.location.back();
  }
}
