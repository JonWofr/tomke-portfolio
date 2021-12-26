import { Component, OnInit } from '@angular/core';
import { projects } from '@features/portfolio/components/projects-section/projects-section.component';
import { Project } from '@shared/models/project.model';

@Component({
  selector: 'admin-dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  selectedProject?: Project;
  shouldShowModal = false;

  constructor() {}

  ngOnInit(): void {
    // Fetch data
    this.projects = projects;
  }

  onClickCancelButton() {
    this.toggleModal();
  }

  onClickAddButton(project: Project) {
    console.log('Adding new project', project);
    this.toggleModal();
  }

  onClickSaveButton(project: Project) {
    console.log('Updating existing project', project);
    this.toggleModal();
  }

  toggleModal() {
    this.shouldShowModal = !this.shouldShowModal;
  }

  onClickProjectCardEditButton(selectedProject: Project) {
    this.selectedProject = selectedProject;
    this.toggleModal();
  }

  onClickProjectCardDeleteButton(selectedProject: Project) {
    console.log('Project shoulud be deleted', selectedProject);
  }

  onClickAddProjectCard() {
    this.selectedProject = undefined;
    this.toggleModal();
  }
}
