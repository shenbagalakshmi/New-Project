import { Component, OnInit,ViewEncapsulation,AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

declare var mLayout:any;
@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit,AfterViewInit {

  constructor(private leftPanelRouter:Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    mLayout.initAside()
  }

  // showlive(){
  //   // this.leftPanelRouter.navigateByUrl('/loadMaps');
  //   console.log("sdhfgjdsgf");
  //   document.getElementById('liveLocationDiv').style.display='block';
  //   document.getElementById('teamLocationDiv').style.display='none';
  //   document.getElementById('dashBoardDiv').style.display='none';
  // }

}
