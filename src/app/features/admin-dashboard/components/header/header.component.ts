import { Component, OnInit } from '@angular/core';
import { Auth, AuthError, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastType } from '@features/admin-dashboard/enums/toast-type.enum';
import { SpinnerControllerService } from '@features/admin-dashboard/services/spinner-controller/spinner-controller.service';
import { ToastControllerService } from '@features/admin-dashboard/services/toast-controller/toast-controller.service';

@Component({
  selector: 'admin-dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private auth: Auth,
    private router: Router,
    private toastController: ToastControllerService,
    private spinnerController: SpinnerControllerService
  ) {}
  ngOnInit(): void {}

  onClickLogOutButton() {
    this.spinnerController.toggleSpinner();
    signOut(this.auth)
      .then(() => {
        this.toastController.showToast({
          type: ToastType.SUCCESS,
          message: 'Erfolgreich ausegloggt!',
        });
        this.router.navigateByUrl('/admin/login');
      })
      .catch((err: AuthError) => {
        this.toastController.showToast({
          type: ToastType.ERROR,
          message: err.message,
        });
      })
      .finally(() => {
        this.spinnerController.toggleSpinner();
      });
  }
}
