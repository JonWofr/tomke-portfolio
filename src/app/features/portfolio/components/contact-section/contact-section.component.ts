import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailStatus } from '@features/portfolio/enums/email-status.enum';
import { environment } from 'environments/environment';
import { first } from 'rxjs';

@Component({
  selector: 'portfolio-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  EmailStatus = EmailStatus;

  emailStatus: EmailStatus = EmailStatus.INITIAL;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const body = {
      senderName: form.value.name,
      senderEmail: form.value.email,
      message: form.value.message,
    };

    this.emailStatus = EmailStatus.PENDING;
    this.httpClient
      .post(`${environment.backendUrl}/api/mails/send-mail`, body)
      .pipe(first())
      .subscribe({
        next: () => {
          this.emailStatus = EmailStatus.SUCCESS;
        },
        error: (err) => {
          console.error(err);
          this.emailStatus = EmailStatus.ERROR;
        },
      });
  }

  onClickRetryButton() {
    this.emailStatus = EmailStatus.INITIAL;
  }
}
