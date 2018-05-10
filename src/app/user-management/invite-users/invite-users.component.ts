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

  }
  ngAfterViewInit() {
      this.scriptLoaderService.loadScripts('app-wizard-wizard-2',
          ['assets/js/wizard.js']);

  }
 

}
