import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapDetailsRoutingModule } from './map-details-routing.module';
import {AdminDashboardModule} from './../admin-dashboard/admin-dashboard.module';
import { TeamLiveLocationComponent } from './team-live-location/team-live-location.component';

@NgModule({
  imports: [
    CommonModule,
    MapDetailsRoutingModule,
    AdminDashboardModule
  ],
  declarations: [TeamLiveLocationComponent]
})
export class MapDetailsModule { }
