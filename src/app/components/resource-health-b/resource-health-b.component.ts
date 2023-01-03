import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-health-b',
  templateUrl: './resource-health-b.component.html',
  styleUrls: ['./resource-health-b.component.css']
})
export class ResourceHealthBComponent implements OnInit {
  energyData = {// values on X-Axis
    labels: ['Date 1', 'Date 2', 'Date 3', 'Date 4', ], 
     datasets: [
      {
        label: "Weekly Energy Information", //ChartId
        data: ['0.049','0.044', '0.05', '0.036',],
        backgroundColor: 'red',
      },
    ]
  }
  wasteData = {// values on X-Axis
    labels: ['Date 1', 'Date 2', 'Date 3', 'Date 4', ], 
     datasets: [
      {
        label: "Weekly Waste Information", //chartId
        data: ['0.1','0.1', '0.1', '0',],
        backgroundColor: 'red',
        borderColor: 'red'
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
