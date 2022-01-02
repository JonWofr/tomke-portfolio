import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FadeInIntersectionObserverService } from '@core/services/fade-in-intersection-observer/fade-in-intersection-observer.service';

@Directive({
  selector: '[sharedFadeIn]',
})
export class FadeInDirective implements OnInit, OnDestroy {
  constructor(
    private fadeInIntersectionObserver: FadeInIntersectionObserverService,
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.classList.add('fade-in');
    this.fadeInIntersectionObserver.registerElement(
      this.elementRef.nativeElement
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.fadeInIntersectionObserver.unregisterElement(
      this.elementRef.nativeElement
    );
  }
}
