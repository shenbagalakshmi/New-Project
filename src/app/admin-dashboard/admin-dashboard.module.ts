import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
// import {AdminDashboardComponent} from'./admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  declarations: [DashboardHeaderComponent, LeftNavComponent, DashboardDetailsComponent],
  exports:[LeftNavComponent,DashboardHeaderComponent]
})
export class AdminDashboardModule { }
