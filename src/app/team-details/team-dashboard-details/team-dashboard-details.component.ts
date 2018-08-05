import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import {DashboardHeaderComponent} from'./../../admin-dashboard/dashboard-header/dashboard-header.component';

@Component({
  selector: 'app-team-dashboard-details',
  templateUrl: './team-dashboard-details.component.html',
  styleUrls: ['./team-dashboard-details.component.css']
})
export class TeamDashboardDetailsComponent implements OnInit,AfterViewInit {

  constructor(private teamScriptLoader:ScriptLoaderService) { }

  ngOnInit() {
    document.getElementById('dashboardDetailsDiv').style.display = 'none' 
   }

  ngAfterViewInit() {
    this.teamScriptLoader.loadScripts('app-team-dashboard-details',
        ['assets/js/dashboard.js','assets/js/datatable/data-local.js','assets/js/charts/teamcharts.bundle.js','assets/js/charts/team-charts.js'],true);

}


}
