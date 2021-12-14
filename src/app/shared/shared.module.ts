import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropTextPipe } from './pipes/crop-text/crop-text.pipe';

/**
 * This module contains all components, pipes etc. that are shared across the
 * application.
 * The shared module can be imported in any other module that needs a component, pipe
 * etc. from the shared module.
 */
@NgModule({
  declarations: [CropTextPipe],
  imports: [
    CommonModule,
    // Should not import other modules of this application
  ],
  exports: [CropTextPipe],
})
export class SharedModule {}
