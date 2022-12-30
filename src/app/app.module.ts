import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';

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
import { PerformanceGraphComponent } from './components/performance-graph/performance-graph.component';
import { ResourceHealthComponent } from './components/resource-health/resource-health.component';
import { ResourceHealthBComponent } from './components/resource-health-b/resource-health-b.component';
import { ResourceEfficiencyComponent } from './components/resource-efficiency/resource-efficiency.component'; 


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
    PerformanceGraphComponent,
    ResourceHealthComponent,
    ResourceHealthBComponent,
    ResourceEfficiencyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    NgCircleProgressModule.forRoot({
      // Optional properties
      "radius": 100,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#c24747",
      "outerStrokeGradientStopColor": "#ffa552",
      "innerStrokeColor": "#404244",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "showBackground": false,
      "lazy": true,
      "animationDuration":300,
      "subtitleFontSize":"15",
      "unitsFontSize":"15",
      "responsive":true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
