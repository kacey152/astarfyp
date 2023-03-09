import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-order-tracking',
  templateUrl: './sales-order-tracking.component.html',
  styleUrls: ['./sales-order-tracking.component.css']
})
export class SalesOrderTrackingComponent implements OnInit {
  @Input() processCustomer!: string;

  customerNameOrders = [
    {orderNumber: "ET-19-0002", customerName: "TOUR VIP", progress: "100%", lastUpdated: "10:01"},
    {orderNumber: "ET-19-0001", customerName: "VIP GUEST", progress: "80%", lastUpdated: "10:03"},
    {orderNumber: "EX-19-0001", customerName: "SES TEST", progress: "80%", lastUpdated: "10:07"},
  ]
  processOrders = [
    {orderNumber: "ET-19-0002", processName: "TOUR VIP", progress: "100%", lastUpdated: "10:01"},
    {orderNumber: "ET-19-0001", processName: "VIP GUEST", progress: "80%", lastUpdated: "10:03"},
    {orderNumber: "EX-19-0001", processName: "SES TEST", progress: "80%", lastUpdated: "10:07"},
  ]

  constructor() {
   }

  ngOnInit(): void {
  }

}
