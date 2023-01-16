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
        data: [2, 2, 3, 3, 5, 5, 5],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'cyan',
        borderWidth: '1',
        fill: true,
      },
    ],
  };

  directSalesData = {
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
        label: 'Direct Sales', //chartId
        data: [2, 2, 5, 5, 5, 5, 5],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'cyan',
        borderWidth: '1',
        fill: true,
      },
    ],
  };

  indirectSalesData = {
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
        label: 'Indirect Sales', //chartId
        data: [3, 5, 5, 5, 5, 4, 4],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'cyan',
        borderWidth: '1',
        fill: true,
      },
    ],
  };

  avgRating = {
    keyAccounts: 0,
    indirect: 0,
    direct: 0,
    overall: 0,
  }

  average(dataGroup){
    let sum = dataGroup.datasets[0].data.reduce((a: number,b: number)=> a + b, 0)
    console.log(sum)
    return Math.floor((sum/dataGroup.datasets[0].data.length) * 100) / 100;
  }
  constructor() {}

  ngOnInit(): void {
    this.avgRating.keyAccounts = this.average(this.keyAccountsData)
    this.avgRating.indirect = this.average(this.indirectSalesData)
    this.avgRating.direct = this.average(this.directSalesData)
    this.avgRating.overall = Math.floor(((this.avgRating.keyAccounts + this.avgRating.indirect + this.avgRating.direct)/3) * 100) / 100;

  }
}
