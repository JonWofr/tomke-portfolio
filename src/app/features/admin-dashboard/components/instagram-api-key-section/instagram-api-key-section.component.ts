import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InstagramApiKey } from '@shared/models/instagram-api-key.model';

@Component({
  selector: 'admin-dashboard-instagram-api-key-section',
  templateUrl: './instagram-api-key-section.component.html',
  styleUrls: ['./instagram-api-key-section.component.scss'],
})
export class InstagramApiKeySectionComponent implements OnInit {
  @Input() instagramApiKey?: InstagramApiKey;
  @Output() clickSubmitButton = new EventEmitter<InstagramApiKey>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.clickSubmitButton.emit(this.instagramApiKey);
  }
}
