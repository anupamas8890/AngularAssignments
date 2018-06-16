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
import { FooterComponent } from './footer/footer.component';
import { Feature2Module } from './feature2/feature2.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    FaqComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,Feature1Module,Feature2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
