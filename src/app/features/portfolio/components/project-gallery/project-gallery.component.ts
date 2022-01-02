import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@shared/models/project.model';
import ScrollBooster from 'scrollbooster';

@Component({
  selector: 'portfolio-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss'],
})
export class ProjectGalleryComponent implements OnInit, AfterViewInit {
  @Input() projects: Project[] = [];

  @ViewChild('projectGalleryViewport')
  projectGalleryViewport?: ElementRef<HTMLDivElement>;

  readonly MAX_ITEMS_IN_GRID = 5;
  grids: { projects: Project[] }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.projects.forEach((project, index) => {
      if (this.shouldCreateNewGrid(index)) {
        this.grids.push({
          projects: [],
        });
      }
      this.addProjectToGrid(project, index);
    });
  }

  ngAfterViewInit(): void {
    new ScrollBooster({
      viewport: this.projectGalleryViewport?.nativeElement ?? null,
      scrollMode: 'transform',
      direction: 'horizontal',
      emulateScroll: true,
      onClick: (state, event) => {
        if (
          !state.isDragging &&
          (event.target as HTMLDivElement).className === 'project-gallery-item'
        ) {
          const anchorElement = (event.target as HTMLDivElement)
            .firstChild as HTMLAnchorElement;
          const routerLink = anchorElement.href.split('/').slice(-2).join('/');
          this.router.navigateByUrl(`/${routerLink}`);
        }
      },
    });
  }

  shouldCreateNewGrid(projectIndex: number) {
    return projectIndex % this.MAX_ITEMS_IN_GRID === 0;
  }

  addProjectToGrid(project: Project, projectIndex: number) {
    this.grids[Math.floor(projectIndex / this.MAX_ITEMS_IN_GRID)].projects.push(
      project
    );
  }
}
