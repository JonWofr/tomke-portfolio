import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery.component';
import { ProjectGalleryItemComponent } from './components/project-gallery-item/project-gallery-item.component';
import { SharedModule } from '@shared/shared.module';
import { ClientsSectionComponent } from './components/clients-section/clients-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SectionHeaderComponent,
    ServicesSectionComponent,
    ServiceCardComponent,
    ProjectsSectionComponent,
    ProjectGalleryComponent,
    ProjectGalleryItemComponent,
    ClientsSectionComponent,
  ],
  imports: [CommonModule, PortfolioRoutingModule, SharedModule],
})
export class PortfolioModule {}
