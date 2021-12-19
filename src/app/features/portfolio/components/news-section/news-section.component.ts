import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

// Instafeed library is included via the script tag and is accessable via the global
// property Instafeed
declare var Instafeed: any;

@Component({
  selector: 'portfolio-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
})
export class NewsSectionComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const instafeedContainerElement = document.querySelector('.instafeed');
    if (instafeedContainerElement) {
      const instafeed = new Instafeed({
        accessToken: environment.instagramBasicDisplayApiToken,
        limit: 6,
        template: `
        <div>
          <div class="padding-top-hack padding-top-hack--1-by-1">
            <div class="padding-top-hack__inner-container">
              <a class="instafeed__link" href="{{link}}">
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
  }
}
