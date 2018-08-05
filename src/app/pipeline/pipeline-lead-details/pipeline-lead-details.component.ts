import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';
import {DashboardHeaderComponent } from '../../admin-dashboard/dashboard-header/dashboard-header.component'
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-pipeline-lead-details',
  templateUrl: './pipeline-lead-details.component.html',
  styleUrls: ['./pipeline-lead-details.component.css']
})
export class PipelineLeadDetailsComponent implements OnInit {

  public meetingRequest: Array<any> = [
    {
    heading: '$10 Showcase cinemas UK',
    closedDate:'closed date June 30 2017'
  },
  {
    heading: '$10 Cineowrld cinemas -new deal',
    closedDate:'closed date June 30 2017'
  },
  {
    heading: '$110 Mini Cooper',
    closedDate:'closed date June 30 2017'
  },
  {
    heading: '$105 Baja Finance SEO',
    closedDate:'closed date June 30 2017'
  },
]
  // public many: Array<string> = ['The', 'possibilities', 'are', 'endless!'];
  public scheduledAppointments: Array<any> = [
    {
    heading: '$10 Showcase cinemas UK',
    closedDate:'closed date June 30 2017'
  },
  {
    heading: '$10 Cineowrld cinemas -new deal',
    closedDate:'closed date June 30 2017'
  },
  {
    heading: '$105 Baja Finance SEO',
    closedDate:'closed date June 30 2017'
  },
]

public qualifyData: Array<any> = [
  {
  heading: '$10 Showcase cinemas UK',
  closedDate:'closed date June 30 2017'
},
{
  heading: '$10 Cineowrld cinemas -new deal',
  closedDate:'closed date June 30 2017'
}
]
public propsalsData: Array<any> = [
  {
  heading: '$10 Showcase cinemas UK',
  closedDate:'closed date June 30 2017'
}
]
public negotiationsData: Array<any> = [
  {
  heading: '$10 Showcase cinemas UK',
  closedDate:'closed date June 30 2017'
},
{
  heading: '$10 Cineowrld cinemas -new deal',
  closedDate:'closed date June 30 2017'
},
{
  heading: '$105 Baja Finance SEO',
  closedDate:'closed date June 30 2017'
},
{
  heading: '$10 Showcase cinemas UK',
  closedDate:'closed date June 30 2017'
}
]

  constructor(private prospectsScriptsLoader:ScriptLoaderService,
    private dragulaService:DragulaService) { }

  ngOnInit() {

    document.getElementById('dashboardDetailsDiv').style.display='none'
    this.dragulaService.dropModel.subscribe((value)=>
  {
    this.onDropModel(value.slice(1));
  });
  this.dragulaService.removeModel.subscribe((value =>
  {
    this.onRemoveModel(value.slice(1));
  }))
  //  console.log( document.getElementsByClassName("dashboardDetailsDiv"));
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    console.log(this.meetingRequest);
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

  ngAfterViewInit() {
  //   this.prospectsScriptsLoader.loadScripts('app-deal-prospects',
  // ['assets/js/dragula/dragula.min.js']);
    // this.prospectsScriptsLoader.loadScripts('app-deal-prospects',
    //     ['assets/js/draggable-portlets/jquery-ui.bundle.js',
    //         'assets/js/draggable-portlets/draggable.js']);

}

}
