import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from '../helpers';
import { ScriptLoaderService } from '../services/script-loader.service';



declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrm;

  constructor(private loginRouter:Router,private scriptLoader:ScriptLoaderService) { }

  ngOnInit() {
    this.loginFrm=new FormGroup({
      userIdentity:new FormControl(""),
      secretWord:new FormControl("")
  
    });

    this.scriptLoader.loadScripts('body', [ 'assets/js/vendors.bundle.js','assets/js/scripts.bundle.js'], true)
    .then(result => {
        Helpers.setLoading(false);
        // optional js to be loaded once
        //this.scriptLoader.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js']);
    });
this.loginRouter.events.subscribe((route) => {
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


onLoginSubmit(event){
  console.log(event);
  this.loginRouter.navigateByUrl('/loadDashboard');
}

}
