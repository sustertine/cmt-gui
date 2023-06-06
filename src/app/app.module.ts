import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components';
import { DashboardModule, DashboardRoutingModule } from './dashboard';
import { PeriodModule } from './period/period.module';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    DashboardModule,
    PeriodModule,
    RouterOutlet,
    DashboardRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PeriodModule],
})
export class AppModule {}
