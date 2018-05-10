import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InviteUsersComponent } from './invite-users/invite-users.component';

const routes: Routes = [
  {
    path:"",
    component:InviteUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
