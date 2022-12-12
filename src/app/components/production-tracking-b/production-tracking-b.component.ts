import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-tracking-b',
  templateUrl: './production-tracking-b.component.html',
  styleUrls: ['./production-tracking-b.component.css']
})
export class ProductionTrackingBComponent implements OnInit {
  orderNumber: String = "SAMPLE"
  constructor() { }

  ngOnInit(): void {
  }

}
