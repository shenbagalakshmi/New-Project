import { Component, OnInit } from '@angular/core';
import {ScriptLoaderService} from './../../services/script-loader.service'
@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
    // document.getElementById('liveLocationDiv').style.display='none';
    // document.getElementById('teamLocationDiv').style.display='none';
  }

  ngAfterViewInit() {
    this._script.loadScripts('app-dashboard-details',
        ['assets/js/dashboard.js','assets/js/charts/flot.bundle.js','assets/js/charts/flotcharts.js']);

}
}
