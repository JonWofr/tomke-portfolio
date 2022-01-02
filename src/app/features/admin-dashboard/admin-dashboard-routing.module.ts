import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/admin/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/admin/']);

const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        ...canActivate(redirectLoggedInToHome),
      },
      {
        path: '',
        component: HomeComponent,
        ...canActivate(redirectUnauthorizedToLogin),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}
