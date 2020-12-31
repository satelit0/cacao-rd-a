import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './component/main/main.component';
import { PriceComponent } from './component/price/price.component';
import { IntroComponent } from './component/intro/intro.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  // {path:'', component: HomeComponent},
  {path: 'price', component: PriceComponent},
  {path: 'intro', component: IntroComponent},
  {path:'main', component: MainComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: HomeComponent}


];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
