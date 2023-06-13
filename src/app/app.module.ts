import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/feature/dashboard.module';
import { DashboardRoutingModule } from './dashboard/feature/dashboard-routing.module';
import { GroupModule } from './group';

const MODULES = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  ComponentsModule,
  DashboardModule,
  RouterModule,
  DashboardRoutingModule,
  GroupModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES],
  bootstrap: [AppComponent],
})
export class AppModule {}
