import { AfterViewInit, Component, OnInit } from '@angular/core';
import { InstagramApiKeyControllerService } from '@core/services/instagram-api-key-controller/instagram-api-key-controller.service';
import { first } from 'rxjs';

// Instafeed library is included via the script tag and is accessable via the global
// property Instafeed
declare var Instafeed: any;

@Component({
  selector: 'portfolio-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent implements OnInit, AfterViewInit {
  instagramPosts?: any[];

  constructor(
    private instagramApiKeyController: InstagramApiKeyControllerService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.instagramApiKeyController
      .fetchAllInstagramApiKeys()
      .pipe(first())
      .subscribe((instagramApiKeys) => {
        if (instagramApiKeys.length === 0) {
          this.instagramPosts = [];
          return;
        }

        const instafeed = new Instafeed({
          accessToken: instagramApiKeys[0].key,
          limit: 6,
          // Mock disables rendering
          mock: true,
          transform: (instagramPost: any) => {
            if (!this.instagramPosts) {
              this.instagramPosts = [];
            }
            this.instagramPosts.push(instagramPost);
          },
        });
        instafeed.run();
      });
  }
}
