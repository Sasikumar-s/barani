import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StockComponent } from './stock/stock.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ProductionComponent } from './production/production.component';
import { IndexComponent } from './index/index.component';
import {APIService} from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanningComponent,
    PurchaseComponent,
    StockComponent,
    MarketingComponent,
    ProductionComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
