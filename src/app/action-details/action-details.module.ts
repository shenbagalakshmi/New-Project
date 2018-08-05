import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionDetailsRoutingModule } from './action-details-routing.module';
import { ActionDetailsViewComponent } from './action-details-view/action-details-view.component';
import {AdminDashboardModule} from './../admin-dashboard/admin-dashboard.module';


@NgModule({
  imports: [
    CommonModule,
    ActionDetailsRoutingModule,
    AdminDashboardModule
  ],
  declarations: [ActionDetailsViewComponent]
})
export class ActionDetailsModule { }
