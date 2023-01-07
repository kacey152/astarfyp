import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionTrackingBComponent } from './components/production-tracking-b/production-tracking-b.component';
import { ProductionTrackingComponent } from './components/production-tracking/production-tracking.component';
import { ResourceTrackingComponent } from './components/resource-tracking/resource-tracking.component';
import { ProductionInventoryComponent } from './components/production-inventory/production-inventory.component';
import { ProductionInventoryBComponent } from './components/production-inventory-b/production-inventory-b.component';
import { ResourceHealthComponent } from './components/resource-health/resource-health.component';
import { ResourceHealthBComponent } from './components/resource-health-b/resource-health-b.component';
import { ManagementKpiComponent } from './components/management-kpi/management-kpi.component';
import { ManagementKpiBComponent } from './components/management-kpi-b/management-kpi-b.component';

const routes: Routes = [
  { path: 'production-tracking', component: ProductionTrackingComponent},
  { path: 'production-tracking-b', component: ProductionTrackingBComponent },
  { path: 'resource-tracking', component: ResourceTrackingComponent },
  { path: 'production-inventory', component: ProductionInventoryComponent },
  { path: 'production-inventory-b', component: ProductionInventoryBComponent },
  { path: 'resource-health', component: ResourceHealthComponent },
  { path: 'resource-health-b', component: ResourceHealthBComponent },
  { path: 'management-kpi', component: ManagementKpiComponent },
  { path: 'management-kpi-b', component: ManagementKpiBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
