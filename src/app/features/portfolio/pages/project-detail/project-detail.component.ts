import { Component, OnInit } from '@angular/core';
import { Project } from '@features/portfolio/models/project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { projects } from '@features/portfolio/components/projects-section/projects-section.component';
import { Location } from '@angular/common';

@Component({
  selector: 'portfolio-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private title: Title
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.router.navigateByUrl('/');
      return;
    }
    this.project = projects.find((project) => project.id === id);
    if (this.project === undefined) {
      this.router.navigateByUrl('/');
      return;
    }
    this.title.setTitle(`${this.project.title} - Tomke Nils`);
  }

  navigateBack() {
    this.location.back();
  }
}
