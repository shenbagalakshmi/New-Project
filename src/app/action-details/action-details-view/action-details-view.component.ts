import { Component, OnInit } from '@angular/core';
import {LeftNavComponent} from './../../admin-dashboard/left-nav/left-nav.component';
import {DashboardHeaderComponent} from './../../admin-dashboard/dashboard-header/dashboard-header.component'


@Component({
  selector: 'app-action-details-view',
  templateUrl: './action-details-view.component.html',
  styleUrls: ['./action-details-view.component.css']
})
export class ActionDetailsViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('dashboardDetailsDiv').style.display='none';
    
  }

}
