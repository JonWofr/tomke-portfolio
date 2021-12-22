import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    LoginComponent,
    ToastComponent,
    AdminDashboardComponent,
    HomeComponent,
  ],
  imports: [CommonModule, AdminDashboardRoutingModule, FormsModule],
})
export class AdminDashboardModule {}
