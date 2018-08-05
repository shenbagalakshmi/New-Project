import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import {AdminDashboardModule} from './../admin-dashboard/admin-dashboard.module'
import { InviteUsersComponent } from './invite-users/invite-users.component';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    AdminDashboardModule
  ],
  declarations: [InviteUsersComponent]
})
export class UserManagementModule { }
