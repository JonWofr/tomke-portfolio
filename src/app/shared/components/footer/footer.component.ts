import { Component, OnInit } from '@angular/core';
import { SocialMediaIconsColor } from '@shared/enums/social-media-icons-color.enum';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  SocialMediaIconsColor = SocialMediaIconsColor;

  constructor() {}

  ngOnInit(): void {}
}
