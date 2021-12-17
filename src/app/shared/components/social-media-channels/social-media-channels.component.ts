import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-social-media-channels',
  templateUrl: './social-media-channels.component.html',
  styleUrls: ['./social-media-channels.component.scss'],
})
export class SocialMediaChannelsComponent implements OnInit {
  @Input() instagramUrl?: string;
  @Input() tikTokUrl?: string;
  @Input() linkedInUrl?: string;

  constructor() {}

  ngOnInit(): void {}
}
