import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { SharedModule } from '@shared/shared.module';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { AddProjectCardComponent } from './components/add-project-card/add-project-card.component';
import { ProjectCardContextMenuComponent } from './components/project-card-context-menu/project-card-context-menu.component';

@NgModule({
  declarations: [
    LoginComponent,
    ToastComponent,
    AdminDashboardComponent,
    HomeComponent,
    HeaderComponent,
    ProjectGridComponent,
    ProjectCardComponent,
    ProjectsSectionComponent,
    AddProjectCardComponent,
    ProjectCardContextMenuComponent,
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    SharedModule,
  ],
})
export class AdminDashboardModule {}
