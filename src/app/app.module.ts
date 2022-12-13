import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductionTrackingComponent } from './components/production-tracking/production-tracking.component';
import { SideHeadingComponent } from './components/side-heading/side-heading.component';
import { SalesOrderTrackingComponent } from './components/sales-order-tracking/sales-order-tracking.component';
import { ResourceTrackingComponent } from './components/resource-tracking/resource-tracking.component';
import { ProductionTrackingBComponent } from './components/production-tracking-b/production-tracking-b.component';
import { WorkOrderListComponent } from './components/work-order-list/work-order-list.component';
import { ProductionInventoryComponent } from './components/production-inventory/production-inventory.component';
import { ProductionInventoryBComponent } from './components/production-inventory-b/production-inventory-b.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductionTrackingComponent,
    SideHeadingComponent,
    SalesOrderTrackingComponent,
    ResourceTrackingComponent,
    ProductionTrackingBComponent,
    WorkOrderListComponent,
    ProductionInventoryComponent,
    ProductionInventoryBComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
