import { Component, OnInit } from '@angular/core';
import { Project } from '@shared/models/project.model';
import { ToastControllerService } from '@features/admin-dashboard/services/toast-controller/toast-controller.service';
import { ToastType } from '@features/admin-dashboard/enums/toast-type.enum';
import { ProjectsControllerService } from '@core/services/projects-controller/projects-controller.service';
import { Toast } from '@features/admin-dashboard/models/toast.model';

@Component({
  selector: 'admin-dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projects?: Project[];
  selectedProject?: Project;
  shouldShowProjectModal = false;
  shouldShowDeletionModal = false;

  constructor(
    private projectsController: ProjectsControllerService,
    private toastController: ToastControllerService
  ) {}

  ngOnInit(): void {
    this.fetchAllProjects();
  }

  fetchAllProjects() {
    this.projectsController.fetchAll().subscribe({
      next: (projects) => {
        console.log(projects);
        this.projects = projects;
      },
      error: (err) => {
        this.toastController.showToast({
          type: ToastType.ERROR,
          message: err,
        });
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  onClickAddProjectCard() {
    this.selectedProject = undefined;
    this.toggleProjectModal();
  }

  onClickProjectCardEditButton(selectedProject: Project) {
    this.selectedProject = selectedProject;
    this.toggleProjectModal();
  }

  async onClickProjectCardDeleteButton(selectedProject: Project) {
    this.selectedProject = selectedProject;
    this.toggleDeletionModal();
  }

  onClickProjectModalCancelButton() {
    this.toggleProjectModal();
  }

  async onClickProjectModalAddButton(project: Project) {
    try {
      await this.projectsController.addProject(project);
      this.toggleProjectModal();
      this.toastController.showToast({
        type: ToastType.SUCCESS,
        message: 'Neues Projekt hinzugefügt!',
      });
    } catch (err) {
      this.handleCrudError(err);
    }
  }

  async onClickProjectModalSaveButton(project: Project) {
    try {
      await this.projectsController.updateProject(project);
      this.toggleProjectModal();
      this.toastController.showToast({
        type: ToastType.SUCCESS,
        message: `Projekt ${project.title} wurde verändert!`,
      });
    } catch (err) {
      this.handleCrudError(err);
    }
  }

  toggleProjectModal() {
    this.shouldShowProjectModal = !this.shouldShowProjectModal;
  }

  toggleDeletionModal() {
    this.shouldShowDeletionModal = !this.shouldShowDeletionModal;
  }

  private handleCrudError(err: unknown) {
    this.toastController.showToast({
      type: ToastType.ERROR,
      message: err as string,
    });
  }

  async onClickDeletionModalDeleteButton() {
    try {
      await this.projectsController.deleteProject(this.selectedProject!);
      this.toggleDeletionModal();
      this.toastController.showToast({
        type: ToastType.SUCCESS,
        message: `Projekt ${this.selectedProject!.title} wurde gelöscht`,
      });
    } catch (err) {
      this.handleCrudError(err);
    }
  }

  onClickDeletionModalCancelButton() {
    this.toggleDeletionModal();
  }
}
