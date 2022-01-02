import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
  @HostListener('document:click')
  onClickDocument() {
    if (this.contextMenuProjectId) this.contextMenuProjectId = undefined;
  }

  contextMenuProjectId?: string;

  constructor() {}

  ngOnInit(): void {}

  onClickProjectCardMoreButton(event: MouseEvent, project: Project) {
    this.contextMenuProjectId =
      project.id !== this.contextMenuProjectId ? project.id : undefined;
    // Event has to be stopped. Otherwise the onClick listener of the document would be triggered
    // and the context menu would be never visible.
    event.stopPropagation();
  }
}
