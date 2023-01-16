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
  constructor() { }

  ngOnInit(): void {
  }

}
