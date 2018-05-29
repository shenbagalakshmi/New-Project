import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealProspectsComponent } from './deal-prospects/deal-prospects.component';

const routes: Routes = [
  {
    path:'',
    component:DealProspectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectsRoutingModule { }
