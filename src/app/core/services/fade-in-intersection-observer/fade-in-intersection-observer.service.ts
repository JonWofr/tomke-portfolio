import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FadeInIntersectionObserverService {
  private readonly intersectionObserver = new IntersectionObserver(
    this.intersectionObserverCallback,
    {
      rootMargin: '-64px 0px -64px 0px',
      threshold: 0,
    }
  );

  constructor() {}

  private intersectionObserverCallback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in--visible');
        observer.unobserve(entry.target);
      }
    });
  }

  registerElement(element: Element) {
    this.intersectionObserver.observe(element);
  }

  unregisterElement(element: Element) {
    this.intersectionObserver.unobserve(element);
  }
}
