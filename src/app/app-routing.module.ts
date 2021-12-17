import { ViewportScroller } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs';

const routes: Routes = [];

@NgModule({
  // onSameUrlNavigation has to be enabled. Otherwise anchor scrolling to the same
  // section twice in a row does not work.
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    // Custom implementation for working scroll position restoration at backwards navigation and anchor scrolling.
    // Without custom implementation it's tedious to enable smooth scrolling for anchor scrolling only and somehow scroll position
    // restoration is not working properly. Although it is not working 100% with this solution either.
    router.events
      .pipe(filter((event: Event): event is Scroll => event instanceof Scroll))
      .subscribe((event) => {
        if (event.position) {
          // Backward navigation. Small timeout because otherwise the previous position can't be calculated correctly.
          const position = event.position;
          setTimeout(() => {
            viewportScroller.scrollToPosition(position);
          }, 50);
        } else if (event.anchor) {
          // Anchor navigation. Scroll-margin is set for all anchors in CSS.
          console.log('anchor navigation');
          document
            .getElementById(event.anchor)
            ?.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
