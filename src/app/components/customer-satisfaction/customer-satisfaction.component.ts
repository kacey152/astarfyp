import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-satisfaction',
  templateUrl: './customer-satisfaction.component.html',
  styleUrls: ['./customer-satisfaction.component.css'],
})
export class CustomerSatisfactionComponent implements OnInit {
  keyAccountsData = {
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
        label: 'Key Accounts', //chartId
        data: ['2', '2', '3', '3', '5', '5', '5'],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'cyan',
        borderWidth: '1',
        fill: true,
        
      },
    ],
    
  };
  constructor() {}

  ngOnInit(): void {}
}
