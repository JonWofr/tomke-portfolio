import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { ServiceTitle } from '@shared/enums/service-title.enum';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'admin-dashboard-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
})
export class ProjectModalComponent implements OnInit {
  @Input() set project(project: Project | undefined) {
    if (project !== undefined) {
      this._project = project;
      this.isCreatingNewProject = false;
    } else {
      this.isCreatingNewProject = true;
    }
  }
  get project(): Project {
    return this._project;
  }
  @Output() clickCancelButton = new EventEmitter<void>();
  @Output() clickAddButton = new EventEmitter<Project>();
  @Output() clickSaveButton = new EventEmitter<Project>();
  services = Object.values(ServiceTitle);
  private _project: Project = {
    id: '',
    title: '',
    thumbnailImageUrl: '',
    services: [],
    description: '',
    slideshowImageUrls: [],
    websiteUrl: '',
    linkedInUrl: '',
    instagramUrl: '',
    tikTokUrl: '',
    createdAt: Timestamp.now(),
    modifiedAt: Timestamp.now(),
  };
  isCreatingNewProject = false;

  constructor() {}

  ngOnInit(): void {}

  onChangeServicesSelect(selectedService: string) {
    this.project.services.push(selectedService as ServiceTitle);
  }

  onClickServiceChip(selectedService: ServiceTitle) {
    this.project.services = this.project.services.filter(
      (service) => service !== selectedService
    );
  }

  onSubmit() {}
}
