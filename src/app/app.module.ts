import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductionTrackingComponent } from './production-tracking/production-tracking.component';
import { SideHeadingComponent } from './side-heading/side-heading.component';
import { SalesOrderTrackingComponent } from './sales-order-tracking/sales-order-tracking.component';
import { ResourceTrackingComponent } from './resource-tracking/resource-tracking.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductionTrackingComponent,
    SideHeadingComponent,
    SalesOrderTrackingComponent,
    ResourceTrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
