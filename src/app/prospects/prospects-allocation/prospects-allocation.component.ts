import { Component, OnInit } from '@angular/core';
import {LeadDetails} from './../shared/lead-details'
// import {DealProspectsComponent} from './../deal-prospects/deal-prospects.component'

@Component({
  selector: 'app-prospects-allocation',
  templateUrl: './prospects-allocation.component.html',
  styleUrls: ['./prospects-allocation.component.css']
})
export class ProspectsAllocationComponent implements OnInit {

  leadRows:Array<any>=[];
  selectedLeadRows:Array<LeadDetails>=[]
  leadColumns:Array<any>=[];

  agentRows:Array<any>=[];
  agentColumns:Array<any>=[];
  selectedAgent:any;

  constructor() { }

  ngOnInit() {
    this.getLeadDetails();
    this.getAgentDetails();
  }

  getAgentDetails(){
    this.agentRows=[
      {
        agentName:'Jeelani',
        pipeLineVal:20
      },
      {
        agentName:'Lokesh',
        pipeLineVal:20
      },
      {
        agentName:'Ramu',
        pipeLineVal:56
      },
      {
        agentName:'Srikanth',
        pipeLineVal:78
      },
      {
        agentName:'Mohan',
        pipeLineVal:12
      }
    ];
    this.agentColumns=[
      {
        name:"agentName"
      },
      {
        name:"pipeLineVal"
      }
    ]
  }

  getLeadDetails(){
this.leadRows=[
  {
    leadName:'Shenba',
    phoneNo:9874512366
  },
  {
    leadName:'Potato',
    phoneNo:9874512366
  },
  {
    leadName:'Sunantha',
    phoneNo:9874512366
  },
  {
    leadName:'Siva',
    phoneNo:9874512366
  },
  {
    leadName:'Shankar',
    phoneNo:9874512366
  }
];
    
    // let tempLeadObj=new LeadDetails();
    // for (let i=0;i<5;i++)
    // {
    //   tempLeadObj.leadName="Shenbagalakshmi"
    //   tempLeadObj.phoneNo=7854632188
      
    // }
    // this.leadRows.push(tempLeadObj);
console.log(this.leadRows);
    this.leadColumns=[
      {name:"leadName"
  },
      {name:"phoneNo"}
    ]

    }

    getSelectedLeadRows(event:any){
      this.selectedLeadRows=event;
      console.log(event);
    }

    getSelectedAgent(event){
      this.selectedAgent=event;
      console.log(event);
    }
  }

