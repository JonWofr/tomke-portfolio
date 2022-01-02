import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  Auth,
  signInWithEmailAndPassword,
  AuthError,
} from '@angular/fire/auth';
import { ToastControllerService } from '@features/admin-dashboard/services/toast-controller/toast-controller.service';
import { ToastType } from '@features/admin-dashboard/enums/toast-type.enum';
import { Router } from '@angular/router';
import { SpinnerControllerService } from '@features/admin-dashboard/services/spinner-controller/spinner-controller.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'admin-dashboard-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: Auth,
    private router: Router,
    private toastController: ToastControllerService,
    private spinnerController: SpinnerControllerService,
    title: Title
  ) {
    title.setTitle('Login - Tomke Nils');
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const { email, password }: { email: string; password: string } = form.value;
    this.spinnerController.toggleSpinner();
    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.showSuccessToast('Erfolgreich eingeloggt!');
        this.router.navigateByUrl('/admin');
      })
      .catch((error: AuthError) => {
        switch (error.code) {
          case 'auth/user-not-found':
            this.showWarnToast('Benutzer nicht gefunden!');
            break;
          case 'auth/wrong-password':
            this.showWarnToast('Falsches Passwort!');
            break;
        }
      })
      .finally(() => {
        this.spinnerController.toggleSpinner();
      });
  }

  showSuccessToast(message: string) {
    this.toastController.showToast({
      type: ToastType.SUCCESS,
      message,
    });
  }

  showWarnToast(message: string) {
    this.toastController.showToast({
      type: ToastType.WARN,
      message,
    });
  }
}
