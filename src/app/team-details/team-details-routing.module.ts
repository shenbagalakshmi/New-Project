import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamDashboardDetailsComponent } from './team-dashboard-details/team-dashboard-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{
  path :'',
  component:TeamDashboardDetailsComponent,
  children:[
    {
    path:'showUserDetails',
    component:UserProfileComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamDetailsRoutingModule { }
