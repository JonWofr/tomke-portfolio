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
    titleEn: '',
    thumbnailImageUrl: '',
    services: [],
    description: '',
    descriptionEn: '',
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
    if (!this.project.services.includes(selectedService as ServiceTitle)) {
      this.project.services.push(selectedService as ServiceTitle);
    }
  }

  onClickServiceChip(selectedService: ServiceTitle) {
    this.project.services = this.project.services.filter(
      (service) => service !== selectedService
    );
  }

  async onChangeThumbnailImageFileInput(fileList: FileList) {
    try {
      const file = fileList.item(0);
      if (!file) return;
      this.project.thumbnailImageUrl = await this.readFileAsDataUrl(file);
    } catch (err) {
      console.error(err);
    }
  }

  readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', ({ target }) => {
        if (!target)
          reject(new Error('An error occurred trying to read the file'));
        else resolve(target.result as string);
      });
      fileReader.addEventListener('error', () => {
        reject(new Error('An error occurred trying to read the file'));
      });
      fileReader.readAsDataURL(file);
    });
  }

  onClickRemoveThumbnailImageButton() {
    this.project.thumbnailImageUrl = '';
  }

  async onChangeSlideshowImagesFileInput(fileList: FileList) {
    try {
      if (fileList.length === 0) return;
      const dataUrlPromises: Promise<string>[] = [];
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList.item(i)!;
        const dataUrlPromise = this.readFileAsDataUrl(file);
        dataUrlPromises.push(dataUrlPromise);
      }
      const dataUrls = await Promise.all(dataUrlPromises);
      this.project.slideshowImageUrls.push(...dataUrls);
    } catch (err) {
      console.error(err);
    }
  }

  onClickRemoveSlideshowImageButton(index: number) {
    this.project.slideshowImageUrls.splice(index, 1);
  }

  onSubmit() {
    this.isCreatingNewProject
      ? this.clickAddButton.emit(this.project)
      : this.clickSaveButton.emit(this.project);
  }

  onClickProjectModal(event: MouseEvent) {
    // Event has to be stopped. Otherwise the overlay onclick listener would be triggered and
    // the modal would close.
    event.stopPropagation();
  }
}
