import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'portfolio-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  @Output() changeHeroTitleIntersection = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initialiseIntersectionObserver();
  }

  initialiseIntersectionObserver() {
    const intersectionObserver = this.createIntersectionObserver();
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) intersectionObserver.observe(heroTitle);
  }

  createIntersectionObserver() {
    const intersectionObserverOptions: IntersectionObserverInit = {
      rootMargin: '-64px 0px 0px 0px',
      threshold: 1,
    };
    const intersectionObserver = new IntersectionObserver(
      this.intersectionObserverCallback.bind(this),
      intersectionObserverOptions
    );
    return intersectionObserver;
  }

  intersectionObserverCallback(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) =>
      this.changeHeroTitleIntersection.emit(entry.isIntersecting)
    );
  }
}
