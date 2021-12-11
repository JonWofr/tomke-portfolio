import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioModule } from '@features/portfolio/portfolio.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, PortfolioModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
