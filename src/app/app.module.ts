import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { Feature1Module } from './feature1/feature1.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    FaqComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,Feature1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
