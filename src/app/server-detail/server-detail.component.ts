import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DownstreamsService, ServerDetails } from '../downstreams.service';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.scss']
})
export class ServerDetailComponent implements OnInit {
  serverDetails: ServerDetails[] = [];

  
  constructor(
    public rest: DownstreamsService,
    private router: Router) { }
    
  ngOnInit(): void {
    this.getServerDetails();
  }

  getServerDetails(): void {
    this.rest.getServerDetails().subscribe((resp: any) => {
      this.serverDetails = resp;
      console.log(this.serverDetails);
    });
  }
}
