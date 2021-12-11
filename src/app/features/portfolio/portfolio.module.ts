import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [HomeComponent, HeroSectionComponent],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
