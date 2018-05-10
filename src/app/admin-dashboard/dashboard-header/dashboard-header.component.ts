import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Helpers } from '../../helpers';
import { ScriptLoaderService } from '../../services/script-loader.service';
import { Router,NavigationEnd,NavigationStart } from '@angular/router';



declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})

export class DashboardHeaderComponent implements OnInit,AfterViewInit {

  constructor(private scriptLoader:ScriptLoaderService,private dashboardRouter:Router) { }

  ngOnInit() {
    this.scriptLoader.loadScripts('body', [ 'assets/js/vendors.bundle.js','assets/js/scripts.bundle.js'], true)
    .then(result => {
        Helpers.setLoading(false);
        // optional js to be loaded once
        //this.scriptLoader.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js']);
    });
this.dashboardRouter.events.subscribe((route) => {
    if (route instanceof NavigationStart) {
        (<any>mLayout).closeMobileAsideMenuOffcanvas();
        (<any>mLayout).closeMobileHorMenuOffcanvas();
        (<any>mApp).scrollTop();
        Helpers.setLoading(true);
        // hide visible popover
        (<any>$('[data-toggle="m-popover"]')).popover('hide');
    }
    if (route instanceof NavigationEnd) {
        // init required js
        (<any>mApp).init();
        (<any>mUtil).init();
        Helpers.setLoading(false);
        // content m-wrapper animation
        let animation = 'm-animate-fade-in-up';
        $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
            $('.m-wrapper').removeClass(animation);
        }).removeClass(animation).addClass(animation);
    }
});

  }

  ngAfterViewInit() {
    mLayout.initHeader();

}

}
