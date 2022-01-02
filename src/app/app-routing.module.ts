import { ViewportScroller } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  // onSameUrlNavigation has to be enabled. Otherwise anchor scrolling to the same
  // section twice in a row does not work.
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      // Offset is a bit less than the actual header height. By that there is a buffer for incorrect
      // scroll position restoration and anchor scrolling.
      scrollOffset: [0, 60],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    // Custom implementation for working scroll position restoration at backwards navigation and anchor scrolling.
    // Without custom implementation scorll position restoration and anchor scrolling is
    // not working properly. Although it is not working 100% with this solution either.
    router.events
      .pipe(filter((event: Event): event is Scroll => event instanceof Scroll))
      .subscribe((event) => {
        if (event.position) {
          // Backward navigation. Small timeout because otherwise the previous position can't be calculated correctly.
          const position = event.position;
          setTimeout(() => {
            viewportScroller.scrollToPosition(position);
          });
        } else if (event.anchor) {
          // Anchor navigation. Small timeout because otherwise anchors do not work all the time.
          const anchor = event.anchor;
          setTimeout(() => {
            viewportScroller.scrollToAnchor(anchor);
          });
        } else {
          // Forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
