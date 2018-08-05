import { Component, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../../services/script-loader.service';

@Component({
  selector: 'app-prospects-grid',
  templateUrl: './prospects-grid.component.html',
  styleUrls: ['./prospects-grid.component.css']
})
export class ProspectsGridComponent implements OnInit {

  constructor(private prospectsGridScriptsLoader:ScriptLoaderService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.prospectsGridScriptsLoader.loadScripts('app-prospects-grid',
  ['assets/js/datatable/data-local.js','assets/js/scripts.bundle.js']);
  }
}
