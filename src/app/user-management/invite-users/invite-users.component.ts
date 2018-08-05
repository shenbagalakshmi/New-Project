import { Component, OnInit } from '@angular/core';
import {ScriptLoaderService} from './../../services/script-loader.service'

@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.css']
})
export class InviteUsersComponent implements OnInit {
  constructor(private scriptLoaderService: ScriptLoaderService) {

  }
  ngOnInit() {
    document.getElementById('dashboardDetailsDiv').style.display = 'none' 
  }
  ngAfterViewInit() {
      this.scriptLoaderService.loadScripts('app-invite-users',
          ['assets/js/scripts.bundle.js','assets/js/wizard.js']);

  }
 

}
