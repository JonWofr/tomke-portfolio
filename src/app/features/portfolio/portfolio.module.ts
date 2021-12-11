import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent, AboutSectionComponent, SectionHeaderComponent],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
