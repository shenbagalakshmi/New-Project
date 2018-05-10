import { Component, OnInit } from '@angular/core';
import {LeftNavComponent} from './../../admin-dashboard/left-nav/left-nav.component'
import {DashboardHeaderComponent} from './../../admin-dashboard/dashboard-header/dashboard-header.component'

@Component({
  selector: 'app-team-live-location',
  templateUrl: './team-live-location.component.html',
  styleUrls: ['./team-live-location.component.css']
})
export class TeamLiveLocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     document.getElementById('dashboardDetailsDiv').style.display='none';
  }

}
