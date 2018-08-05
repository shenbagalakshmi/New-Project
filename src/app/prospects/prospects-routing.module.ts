import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealProspectsComponent } from './deal-prospects/deal-prospects.component';
import { ProspectsGridComponent } from './prospects-grid/prospects-grid.component';
import { ProspectsAllocationComponent } from './prospects-allocation/prospects-allocation.component';

const routes: Routes = [
  {
    path:'',
    component:DealProspectsComponent,
    children:[
      {
        path:'showAssigned',
        component:ProspectsGridComponent
      },
      {
        path:'allocateLead',
        component:ProspectsAllocationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectsRoutingModule { }
