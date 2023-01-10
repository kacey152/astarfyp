import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-kpi-b',
  templateUrl: './management-kpi-b.component.html',
  styleUrls: ['./management-kpi-b.component.css']
})
export class ManagementKpiBComponent implements OnInit {
  productivity={
    value: 1.87,
    projection: 1.92,
    target: 2
  }  
  onTimeDelivery={
    value: 99.26,
    projection: 21.14,
    target: 99.22 
  }    
  capacityUtilization={
    value: 63.71,
    projection: 42.96,
    target: 99.9
  }    
  safety={
    value: 0,
    projection: 0,
    target: 0
  }    
  constructor() { }

  ngOnInit(): void {
  }

}
