import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components';
import { DashboardModule, DashboardRoutingModule } from './dashboard';
import { PeriodModule } from './period/period.module';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { GroupModule } from './group';

const MODULES = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  ComponentsModule,
  DashboardModule,
  PeriodModule,
  RouterOutlet,
  DashboardRoutingModule,
  GroupModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES],
  bootstrap: [AppComponent],
})
export class AppModule {}
