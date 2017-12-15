import { Component, OnInit } from '@angular/core';
import { CHARTCONFIG } from '../charts/charts.config';

// service
import { FastUpService } from '../service/FastupService';



import { Dashboard,DashboardResult } from '../Model/dashboard';
@Component({

      providers: [FastUpService],
  templateUrl: './naming.component.html'
})
export class NamingComponent implements OnInit {


     private modelrlist: DashboardResult[] = [];
      public src:any;
        constructor( private FastUpService: FastUpService) { }

ngOnInit(): void {
 
}

}
