import { Component, OnInit } from '@angular/core';
import { CHARTCONFIG } from '../charts/charts.config';

// service
import { FastUpService } from '../service/FastupService';



import { Dashboard,DashboardResult } from '../Model/dashboard';
@Component({

      providers: [FastUpService],
  templateUrl: './database.component.html'
})
export class DataBaseComponent implements OnInit {


     private modelrlist: DashboardResult[] = [];
      public src:any;
        constructor( private FastUpService: FastUpService) { }

ngOnInit(): void {
 
}

}
