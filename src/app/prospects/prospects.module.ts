import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectsRoutingModule } from './prospects-routing.module';
import { DealProspectsComponent } from './deal-prospects/deal-prospects.component';
import {AdminDashboardModule} from './../admin-dashboard/admin-dashboard.module'

@NgModule({
  imports: [
    CommonModule,
    ProspectsRoutingModule,
    AdminDashboardModule
  ],
  declarations: [DealProspectsComponent]
})

export class ProspectsModule { }
