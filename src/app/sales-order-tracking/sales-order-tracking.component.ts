import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-order-tracking',
  templateUrl: './sales-order-tracking.component.html',
  styleUrls: ['./sales-order-tracking.component.css']
})
export class SalesOrderTrackingComponent implements OnInit {
  @Input() processCustomer!: string;
  constructor() {
   }

  ngOnInit(): void {
  }

}
