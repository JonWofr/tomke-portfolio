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
  constructor(
    private instagramApiKeyController: InstagramApiKeyControllerService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.instagramApiKeyController
      .fetchAllInstagramApiKeys()
      .pipe(first())
      .subscribe((instagramApiKeys) => {
        const instafeedContainerElement = document.querySelector('.instafeed');
        if (instafeedContainerElement) {
          const instafeed = new Instafeed({
            accessToken: instagramApiKeys[0].key,
            limit: 6,
            template: `
          <div>
            <div class="padding-top-hack padding-top-hack--1-by-1">
              <div class="padding-top-hack__inner-container">
                <a class="instafeed__link" href="{{link}}" target="_blank">
                  <img class="instafeed__image" title="{{caption}}" src="{{image}}" />
                </a>
              </div>
            </div>
          </div>
        `,
            target: instafeedContainerElement,
          });
          instafeed.run();
        }
      });
  }
}
