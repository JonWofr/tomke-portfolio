import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropTextPipe } from './pipes/crop-text/crop-text.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaChannelsComponent } from './components/social-media-channels/social-media-channels.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FadeInDirective } from './directives/fade-in/fade-in.directive';
import { LanguageDropdownMenuComponent } from './components/language-dropdown-menu/language-dropdown-menu.component';
import { LocalizeServicesPipe } from './pipes/localize-services/localize-services.pipe';
import { ParseResponsiveImageURLs } from './pipes/parse-responsive-image-urls/parse-responsive-image-urls.pipe';

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
    SectionHeaderComponent,
    SpinnerComponent,
    FadeInDirective,
    LanguageDropdownMenuComponent,
    LocalizeServicesPipe,
    ParseResponsiveImageURLs,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    // Should not import other modules of this application
  ],
  exports: [
    CropTextPipe,
    FooterComponent,
    SocialMediaChannelsComponent,
    HeaderComponent,
    SectionHeaderComponent,
    SpinnerComponent,
    FadeInDirective,
    LocalizeServicesPipe,
    ParseResponsiveImageURLs,
  ],
})
export class SharedModule {}
