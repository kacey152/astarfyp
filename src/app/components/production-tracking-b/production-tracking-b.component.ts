import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-tracking-b',
  templateUrl: './production-tracking-b.component.html',
  styleUrls: ['./production-tracking-b.component.css']
})
export class ProductionTrackingBComponent implements OnInit {
  orderNumber: String = "SAMPLE"

  circles = [
    { x: 100, y: 300, value: 1, status: 'good' },
    { x: 100, y: 150, value: 2, status: 'warning' },
    { x: 300, y: 150, value: 3, status: 'danger' },
    // add more circles as needed
  ];
  

  getColor(status: string): string {
    switch (status) {
      case 'good': return 'green';
      case 'warning': return 'yellow';
      case 'danger': return 'red';
      default: return 'gray';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
