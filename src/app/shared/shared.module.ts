import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * This module contains all components, pipes etc. that are shared across the
 * application.
 * The shared module can be imported in any other module that needs a component, pipe
 * etc. from the shared module.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Should not import other modules of this application
  ],
})
export class SharedModule {}
