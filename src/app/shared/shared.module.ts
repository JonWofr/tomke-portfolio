import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropTextPipe } from './pipes/crop-text/crop-text.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaChannelsComponent } from './components/social-media-channels/social-media-channels.component';
import { HeaderComponent } from './components/header/header.component';

/**
 * This module contains all components, pipes etc. that are shared across the
 * application.
 * The shared module can be imported in any other module that needs a component, pipe
 * etc. from the shared module.
 */
@NgModule({
  declarations: [
    CropTextPipe,
    FooterComponent,
    SocialMediaChannelsComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    // Should not import other modules of this application
  ],
  exports: [
    CropTextPipe,
    FooterComponent,
    SocialMediaChannelsComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
