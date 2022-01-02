import { Injectable } from '@angular/core';
import { Toast } from '@features/admin-dashboard/models/toast.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastControllerService {
  private readonly subject = new Subject<Toast>();

  constructor() {}

  showToast(toast: Toast) {
    this.subject.next(toast);
  }

  getSubject() {
    return this.subject;
  }
}
