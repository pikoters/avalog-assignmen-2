import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConvertionMessage, DownstreamsService, ServerDetails } from '../downstreams.service';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.scss']
})
export class ServerDetailComponent implements OnInit {
  serverDetails: Partial<ServerDetails> = {};
  convertionMessage: Partial<ConvertionMessage> = {};
  
  constructor(
    public rest: DownstreamsService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.getServerDetails();
  }

  getServerDetails(): void {
    this.rest.getServerDetails().subscribe((resp: any) => {
      this.serverDetails = resp;
      this.rest.convertSystemTime( resp.serverTimeZone , 'Asia/Manila', resp.serverTime).subscribe((resp:any ) => {
          console.log(resp);
          this.convertionMessage = resp;
          this.serverDetails.serverTimeZone = 'Asia/Manila';
          var date = new Date(resp.toTimestamp *1000);
          this.serverDetails.serverTime = date.toLocaleString('en-GB').split(',')[1];
      });
      console.log(this.serverDetails);
    });
  }
}
