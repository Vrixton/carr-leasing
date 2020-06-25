import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { WantCarComponent } from './want-car/want-car.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { BrandsComponent } from './brands/brands.component';
import { ModelComponent } from './model/model.component';
import { CustomizeComponent } from './customize/customize.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WantCarComponent,
    HowWorksComponent,
    BrandsComponent,
    ModelComponent,
    CustomizeComponent,
    TestimonialsComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CarouselModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
