import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { SectionId } from '@shared/enums/section-id.enum';

@Component({
  selector: 'portfolio-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  SectionId = SectionId;

  @Output() changeHeroTitleIntersection = new EventEmitter<boolean>();

  isContactButtonIntersecting?: boolean;
  contactButtonAnimationQueue: boolean[] = [];
  isContactButtonAnimationRunning = false;
  private readonly intersectionObserverOptions: IntersectionObserverInit = {
    rootMargin: '-64px 0px 0px 0px',
    threshold: 1,
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initialiseIntersectionObserver(
      '.hero__title',
      this.titleIntersectionObserverCallback.bind(this),
      this.intersectionObserverOptions
    );
    this.initialiseIntersectionObserver(
      '.hero__contact-button-trigger',
      this.contactButtonIntersectionObserverCallback.bind(this),
      this.intersectionObserverOptions
    );
  }

  initialiseIntersectionObserver(
    elementsQuerySelector: string,
    intersectionObserverCallback: IntersectionObserverCallback,
    intersectionObserverOptions: IntersectionObserverInit
  ) {
    const intersectionObserver = new IntersectionObserver(
      intersectionObserverCallback,
      intersectionObserverOptions
    );
    const elements = document.querySelectorAll(elementsQuerySelector);
    elements.forEach((element) => intersectionObserver.observe(element));
  }

  titleIntersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) =>
      this.changeHeroTitleIntersection.emit(entry.isIntersecting)
    );
  }

  contactButtonIntersectionObserverCallback(
    entries: IntersectionObserverEntry[]
  ) {
    entries.forEach((entry) => {
      console.log('triggered', entry);
      // No animation should happen when the button is initialised
      if (this.isContactButtonIntersecting === undefined) {
        this.isContactButtonIntersecting = entry.isIntersecting;
        return;
      }

      this.handleContactButtonAnimation(entry.isIntersecting);
    });
  }

  handleContactButtonAnimation(isIntersecting: boolean) {
    if (!this.isContactButtonAnimationRunning) {
      this.startContactButtonAnimation(isIntersecting);
      // Set to the total amount of the CSS transition-duration plus a buffer of 50ms
      this.setTimeoutPromise(550).then(
        this.stopContactButtonAnimation.bind(this)
      );
    } else {
      this.contactButtonAnimationQueue.push(isIntersecting);
    }
  }

  startContactButtonAnimation(isIntersecting: boolean) {
    this.isContactButtonIntersecting = isIntersecting;
    this.isContactButtonAnimationRunning = true;
  }

  setTimeoutPromise(ms: number): Promise<void> {
    return new Promise((resolve, _) => {
      setTimeout(resolve, ms);
    });
  }

  stopContactButtonAnimation() {
    this.isContactButtonAnimationRunning = false;
    if (this.contactButtonAnimationQueue.length > 0) {
      const isIntersecting =
        this.contactButtonAnimationQueue[
          this.contactButtonAnimationQueue.length - 1
        ];
      this.contactButtonAnimationQueue = [];
      this.handleContactButtonAnimation(isIntersecting);
    }
  }
}
