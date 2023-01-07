import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-kpi',
  templateUrl: './management-kpi.component.html',
  styleUrls: ['./management-kpi.component.css']
})
export class ManagementKpiComponent implements OnInit {

  profit={
    value: 54590,
    projection: 105.2,
    target: 95.7
  }  
  inventory: any = 100;  
  cost: any = 100;  
  productionVolume: any = 100;  
  constructor() { }

  ngOnInit(): void {
  }

}
