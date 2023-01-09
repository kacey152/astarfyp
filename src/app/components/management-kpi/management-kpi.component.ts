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
  inventory={
    value: 353629,
    projection: 394.75,
    target: 405.83
  }    
  cost={
    value: 27950,
    projection: 61.3,
    target: 53.1
  }    
  productionVolume={
    value: 4965,
    projection: 4.372,
    target: 9.838
  }    
  constructor() { }

  ngOnInit(): void {
  }

}
