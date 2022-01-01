import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type ShouldShowSpinner = boolean;

@Injectable({
  providedIn: 'root',
})
export class SpinnerControllerService {
  private readonly subject = new Subject<ShouldShowSpinner>();
  private shouldShowSpinner: ShouldShowSpinner = false;

  constructor() {}

  toggleSpinner() {
    this.shouldShowSpinner = !this.shouldShowSpinner;
    this.subject.next(this.shouldShowSpinner);
  }

  getSubject() {
    return this.subject;
  }
}
