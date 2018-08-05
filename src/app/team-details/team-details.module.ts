import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import {AdminDashboardModule} from './../admin-dashboard/admin-dashboard.module';
import { TeamDashboardDetailsComponent } from './team-dashboard-details/team-dashboard-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    TeamDetailsRoutingModule,
    AdminDashboardModule
  ],
  declarations: [TeamDashboardDetailsComponent, UserProfileComponent]
})
export class TeamDetailsModule { }
