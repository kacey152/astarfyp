import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistics-tracking',
  templateUrl: './logistics-tracking.component.html',
  styleUrls: ['./logistics-tracking.component.css'],
})
export class LogisticsTrackingComponent implements OnInit {
  deliveries = [
    {
      rider: 'YEN TING',
      current: '7',
      total: '11',
      pickup: 'Josef',
    },
    {
      rider: 'DEMO',
      current: '10',
      total: '10',
      pickup: 'Annamaria',
    },
  ];

  orderStatusData = {
    // values on X-Axis
    labels: [
      'Payment Received',
      'Order Placed',
      'Production Scheduled',
      'Production Started',
      'Production Completed',
      'In Transit',
      'Order Delivered',
    ],
    datasets: [
      {
        label: 'Order Completed', //chartId
        data: [11, 50, 25, 30, 10, 20, 0],
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: '1',
        fill: true,
      },
      {
        label: 'Order Incomplete', //chartId
        data: [2, 10, 5, 6, 2, 4, 0],
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: '1',
        fill: true,
      },
    ],
  };

  orders = [{
    orderNo: "EX-220822-0001",
    customer: "Test",
    accountType: "Direct Sales",
    status: true,
    planned: "2022-08-22 12:04",
    actual: "-" 
  },
  {
    orderNo: "EX-220822-0002",
    customer: "Tan",
    accountType: "Direct Sales",
    status: false,
    planned: "2022-08-21 00:00",
    actual: "2022-08-22 00:00" 
  },
  {
    orderNo: "EX-220822-0002",
    customer: "Tan",
    accountType: "Direct Sales",
    status: false,
    planned: "2022-08-21 00:00",
    actual: "2022-08-22 00:00" 
  },
  {
    orderNo: "EX-220822-0002",
    customer: "Tan",
    accountType: "Direct Sales",
    status: false,
    planned: "2022-08-21 00:00",
    actual: "2022-08-22 00:00" 
  },
  {
    orderNo: "EX-220822-0002",
    customer: "Tan",
    accountType: "Direct Sales",
    status: false,
    planned: "2022-08-21 00:00",
    actual: "2022-08-22 00:00" 
  },
  {
    orderNo: "EX-220822-0002",
    customer: "Tan",
    accountType: "Direct Sales",
    status: false,
    planned: "2022-08-21 00:00",
    actual: "2022-08-22 00:00" 
  },
  {
    orderNo: "EX-220822-0002",
    customer: "Tan",
    accountType: "Direct Sales",
    status: false,
    planned: "2022-08-21 00:00",
    actual: "2022-08-22 00:00" 
  },]
  constructor() {}

  ngOnInit(): void {}
}
