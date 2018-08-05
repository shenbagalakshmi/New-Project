import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import {DashboardHeaderComponent} from'./../../admin-dashboard/dashboard-header/dashboard-header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-deal-prospects',
  templateUrl: './deal-prospects.component.html',
  styleUrls: ['./deal-prospects.component.css']
})
export class DealProspectsComponent implements OnInit,AfterViewInit {

  showGridDiv:boolean = true;
  assignClick:boolean;
  unassignClick:boolean ;
  constructor(private router:Router){

  }
ngOnInit(){
  document.getElementById('dashboardDetailsDiv').style.display = 'none' ;
  console.log(this.router.routerState.snapshot.url);
  if(this.router.routerState.snapshot.url != '/showProspects/allocateLead')
this.showAssignedGrid();
}

ngAfterViewInit(){

}

generateDiv(){
  // this.showGridDiv=!this.showGridDiv;
}
showAssignedGrid(){
  this.assignClick=true;
  this.unassignClick=false;
  this.router.navigateByUrl('/showProspects/showAssigned');

}

navToUnassigned(){
  this.unassignClick=true;
  this.router.navigateByUrl('/showProspects/allocateLead');
}
}
