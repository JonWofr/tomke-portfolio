import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'portfolio-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(contactForm: NgForm) {
    console.log(contactForm);
  }
}
