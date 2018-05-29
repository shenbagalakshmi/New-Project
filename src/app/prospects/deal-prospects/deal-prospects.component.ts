import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import {DashboardHeaderComponent } from '../../admin-dashboard/dashboard-header/dashboard-header.component'

@Component({
  selector: 'app-deal-prospects',
  templateUrl: './deal-prospects.component.html',
  styleUrls: ['./deal-prospects.component.css']
})
export class DealProspectsComponent implements OnInit {

  constructor(private prospectsScriptsLoader:ScriptLoaderService) { }

  ngOnInit() {
   console.log( document.getElementsByClassName("dashboardDetailsDiv"));
  }

  ngAfterViewInit() {
    this.prospectsScriptsLoader.loadScripts('app-deal-prospects',
        ['assets/js/draggable-portlets/jquery-ui.bundle.js',
            'assets/js/draggable-portlets/draggable.js']);

}

}
