import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

//components
import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

//modules
import {AdminDashboardModule} from './admin-dashboard/admin-dashboard.module';
import {MapDetailsModule} from './map-details/map-details.module'
import { UserManagementModule } from './user-management/user-management.module';

//services
import {ScriptLoaderService} from './services/script-loader.service';


const appRoutes: Routes = [
  {
  path: '',
  redirectTo:'login',
  pathMatch:'full' 
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
   path:'loadDashboard',
   loadChildren: () => AdminDashboardModule
   },
   {
     path:'loadMaps',
     loadChildren: () => MapDetailsModule
   },
   {
    path:'usersInvite',
    loadChildren: () => UserManagementModule
   },
   { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
