import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamLiveLocationComponent } from './team-live-location/team-live-location.component';

const routes: Routes = [
  {
    path:'',
    component:TeamLiveLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapDetailsRoutingModule { }
