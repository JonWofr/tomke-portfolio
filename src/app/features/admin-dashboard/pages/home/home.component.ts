import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from '@shared/models/project.model';
import { ToastControllerService } from '@features/admin-dashboard/services/toast-controller/toast-controller.service';
import { ToastType } from '@features/admin-dashboard/enums/toast-type.enum';
import { ProjectsControllerService } from '@core/services/projects-controller/projects-controller.service';
import { InstagramApiKeyControllerService } from '@core/services/instagram-api-key-controller/instagram-api-key-controller.service';
import { InstagramApiKey } from '@shared/models/instagram-api-key.model';
import { SpinnerControllerService } from '@features/admin-dashboard/services/spinner-controller/spinner-controller.service';
import { Subject, takeUntil } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'admin-dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  projects?: Project[];
  instagramApiKey?: InstagramApiKey;
  selectedProject?: Project;
  shouldShowProjectModal = false;
  shouldShowDeletionModal = false;
  private endSubscriptions = new Subject<void>();

  constructor(
    private projectsController: ProjectsControllerService,
    private toastController: ToastControllerService,
    private instagramApiKeysController: InstagramApiKeyControllerService,
    private spinnerController: SpinnerControllerService,
    title: Title
  ) {
    title.setTitle('Admin Dashboard - Tomke Nils');
  }

  ngOnInit(): void {
    this.fetchAllProjects();
    this.fetchInstagramApiKey();
  }

  ngOnDestroy(): void {
    this.endSubscriptions.next();
    this.endSubscriptions.complete();
  }

  fetchAllProjects() {
    this.projectsController
      .fetchAllProjects()
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe({
        next: (projects) => {
          this.projects = projects;
        },
        error: this.showErrorToast,
      });
  }

  fetchInstagramApiKey() {
    this.instagramApiKeysController
      .fetchAllInstagramApiKeys()
      .pipe(takeUntil(this.endSubscriptions))
      .subscribe({
        next: (instagramApiKeys) => {
          this.instagramApiKey = instagramApiKeys[0];
        },
        error: this.showErrorToast,
      });
  }

  onClickAddProjectCard() {
    this.selectedProject = undefined;
    this.toggleProjectModal();
  }

  onClickProjectCardEditButton(selectedProject: Project) {
    this.selectedProject = cloneDeep(selectedProject);
    this.toggleProjectModal();
  }

  onClickProjectCardDeleteButton(selectedProject: Project) {
    this.selectedProject = cloneDeep(selectedProject);
    this.toggleDeletionModal();
  }

  onClickProjectModalCancelButton() {
    this.toggleProjectModal();
  }

  async onClickProjectModalAddButton(project: Project) {
    try {
      this.spinnerController.toggleSpinner();
      await this.projectsController.addProject(project);
      this.toggleProjectModal();
      this.showSuccessToast(`Projekt ${project.title} wurde hinzugefügt!`);
    } catch (err) {
      this.showErrorToast(err);
    } finally {
      this.spinnerController.toggleSpinner();
    }
  }

  async onClickProjectModalSaveButton(project: Project) {
    try {
      this.spinnerController.toggleSpinner();
      await this.projectsController.updateProject(project);
      this.toggleProjectModal();
      this.showSuccessToast(`Projekt ${project.title} wurde verändert!`);
    } catch (err) {
      this.showErrorToast(err);
    } finally {
      this.spinnerController.toggleSpinner();
    }
  }

  toggleProjectModal() {
    this.shouldShowProjectModal = !this.shouldShowProjectModal;
  }

  toggleDeletionModal() {
    this.shouldShowDeletionModal = !this.shouldShowDeletionModal;
  }

  private showErrorToast(err: unknown) {
    this.toastController.showToast({
      type: ToastType.ERROR,
      message: err as string,
    });
  }

  private showSuccessToast(message: string) {
    this.toastController.showToast({
      type: ToastType.SUCCESS,
      message,
    });
  }

  async onClickDeletionModalDeleteButton() {
    try {
      this.spinnerController.toggleSpinner();
      await this.projectsController.deleteProject(this.selectedProject!);
      this.toggleDeletionModal();
      this.showSuccessToast(
        `Projekt ${this.selectedProject!.title} wurde gelöscht!`
      );
    } catch (err) {
      this.showErrorToast(err);
    } finally {
      this.spinnerController.toggleSpinner();
    }
  }

  onClickDeletionModalCancelButton() {
    this.toggleDeletionModal();
  }

  async onClickInstagramApiKeySectionSubmitButton(
    instagramApiKey: InstagramApiKey
  ) {
    try {
      this.spinnerController.toggleSpinner();
      await this.instagramApiKeysController.replaceInstagramApiKey(
        instagramApiKey
      );
      this.showSuccessToast(
        `Instagram API key wurde erfolgreich ausgetauscht!`
      );
    } catch (err) {
      this.showErrorToast(err);
    } finally {
      this.spinnerController.toggleSpinner();
    }
  }
}
