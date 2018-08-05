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

  checkForEmails(event:any){
    console.log(event);
    var textInsideFile:string='';
    const reader = new FileReader();
    reader.onload = () =>{
       textInsideFile= reader.result;
      // console.log(textInsideFile);
      const splittedAry = textInsideFile.split(',',100);
// console.log(splittedAry);
    }
   
reader.readAsText(event.target.files[0]);


  }

}
