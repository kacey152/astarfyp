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

  constructor() {}

  ngOnInit(): void {}
}
