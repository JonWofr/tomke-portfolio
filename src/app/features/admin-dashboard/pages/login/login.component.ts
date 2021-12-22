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

@Component({
  selector: 'admin-dashboard-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: Auth,
    private router: Router,
    private toastController: ToastControllerService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const { email, password }: { email: string; password: string } = form.value;
    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.toastController.showToast({
          type: ToastType.SUCCESS,
          message: 'Erfolgreich eingeloggt!',
        });
        this.router.navigateByUrl('/admin');
      })
      .catch((error: AuthError) => {
        switch (error.code) {
          case 'auth/user-not-found':
            this.toastController.showToast({
              type: ToastType.WARN,
              message: 'Benutzer nicht gefunden!',
            });
            break;
          case 'auth/wrong-password':
            this.toastController.showToast({
              type: ToastType.WARN,
              message: 'Falsches Passwort!',
            });
            break;
        }
      });
  }
}
