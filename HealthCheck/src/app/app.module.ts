import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CitiesComponent } from './cities/cities.component';

import { AppRoutingModule } from './app-routing.module';
import { HealthCheckComponent } from './health-check/health-check.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './angular-material.module';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FetchDataComponent,
    NavMenuComponent,
    HealthCheckComponent,
    CitiesComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
