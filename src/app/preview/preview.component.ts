import { Component, OnInit } from '@angular/core';
import { CHARTCONFIG } from '../charts/charts.config';

// service
import { FastUpService } from '../service/FastupService';


import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

import { Dashboard, DashboardResult } from '../Model/dashboard';
@Component({

  providers: [FastUpService],
  templateUrl: './preview.component.html'
})
export class PreviewComponent implements OnInit {

  Id: any;
  sub: any;
  private modelrlist: DashboardResult[] = [];
  public src: any;

  public isedit:boolean=false;
  constructor(private FastUpService: FastUpService, private _fb: FormBuilder, private router: Router, private route: ActivatedRoute)
  { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.Id = params['id']; // (+) converts string 'id' to a number
debugger

this.getdashboardId();

    });

  }


  getdashboardId(){
debugger
  this.FastUpService.getdashboardId(this.Id).subscribe(
      results => {
              debugger
        // this.isedit=false;
        this.modelrlist = results;
      },
      error => {

      });
}

}
