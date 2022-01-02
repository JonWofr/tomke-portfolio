import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaIconsColor } from '@shared/enums/social-media-icons-color.enum';

@Component({
  selector: 'shared-social-media-channels',
  templateUrl: './social-media-channels.component.html',
  styleUrls: ['./social-media-channels.component.scss'],
})
export class SocialMediaChannelsComponent implements OnInit {
  SocialMediaIconsColor = SocialMediaIconsColor;

  @Input() instagramUrl?: string;
  @Input() tikTokUrl?: string;
  @Input() linkedInUrl?: string;
  @Input() iconsColor: SocialMediaIconsColor = SocialMediaIconsColor.LIGHT;

  constructor() {}

  ngOnInit(): void {}
}
