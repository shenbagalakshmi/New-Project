import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectsRoutingModule } from './prospects-routing.module';
import { DealProspectsComponent } from './deal-prospects/deal-prospects.component';
import {AdminDashboardModule} from './../admin-dashboard/admin-dashboard.module';
import { ProspectsGridComponent } from './prospects-grid/prospects-grid.component';
import { ProspectsAllocationComponent } from './prospects-allocation/prospects-allocation.component';

//modules
import {FormsModule} from '@angular/forms';

import { NgxDataGridModule } from '@jb7/ngxdatagrid';

@NgModule({
  imports: [
    CommonModule,
    NgxDataGridModule,
    FormsModule,
    ProspectsRoutingModule,
    AdminDashboardModule
  
  ],
  declarations: [DealProspectsComponent, ProspectsGridComponent, ProspectsAllocationComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})

export class ProspectsModule { }
