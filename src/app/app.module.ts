import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BannerComponent } from './banner/banner.component';
import { SectionComponent } from './section/section.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerBottomComponent } from './banner-bottom/banner-bottom.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BannerComponent,
    SectionComponent,
    CarouselComponent,
    BannerBottomComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
