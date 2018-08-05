import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineLeadDetailsComponent } from './pipeline-lead-details/pipeline-lead-details.component';
import { AdminDashboardModule } from '../admin-dashboard/admin-dashboard.module';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    PipelineRoutingModule,
    AdminDashboardModule,
    DragulaModule
  ],
  declarations: [PipelineLeadDetailsComponent]
})
export class PipelineModule { }
