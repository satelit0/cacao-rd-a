import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { AppNavbarComponent } from './component/app-navbar/app-navbar.component';
import { PriceComponent } from './component/price/price.component';
import { IntroComponent } from './component/intro/intro.component';
import { RdesComponent } from './component/rdes/rdes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    AppNavbarComponent,
    PriceComponent,
    IntroComponent,
    RdesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
