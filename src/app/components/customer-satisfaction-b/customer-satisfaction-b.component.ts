import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-satisfaction-b',
  templateUrl: './customer-satisfaction-b.component.html',
  styleUrls: ['./customer-satisfaction-b.component.css']
})
export class CustomerSatisfactionBComponent implements OnInit {
  rating = {
    // values on X-Axis
    labels: [
      'Positive',
      'Neutral',
      'Negative',
    ],
    datasets: [
      {
        label: 'Rating', //chartId
        data: [105, 30, 17],
        backgroundColor: [
          'rgba(38,236,105,255)',
          'rgba(255,206,83,255)',
          'rgba(252,110,80,255)',],
        borderWidth: 0,
      },
 
    ],
  };

  revenueData = {
    // values on X-Axis
    labels: [
      'Date 1',
      'Date 2',
      'Date 3',
      'Date 4',
      'Date 5',
      'Date 6',
      'Date 7',
    ],
    datasets: [
      {
        label: 'Revenue', //chartId
        data: [600, 700, 900, 1000, 1200, 1600, 1380],
        backgroundColor: 'rgb(128,188,244)',
        borderWidth: '1',
        fill: true,
      },
    ],
  };

  productSatisfaction = {
    // values on X-Axis
    labels: [
      'Date 1',
      'Date 2',
      'Date 3',
      'Date 4',
      'Date 5',
      'Date 6',
      'Date 7',
    ],
    datasets: [
      {
        label: 'Product Satisfaction', //chartId
        data: [35, 39, 50, 55, 60, 80, 70],
        backgroundColor: 'rgb(128,188,244)',
        borderWidth: '1',
        fill: true,
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
