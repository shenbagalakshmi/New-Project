import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionDetailsViewComponent } from './action-details-view/action-details-view.component';

const routes: Routes = [
 { path:'',
  component:ActionDetailsViewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionDetailsRoutingModule { }
