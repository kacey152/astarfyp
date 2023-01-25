import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-progress',
  templateUrl: './delivery-progress.component.html',
  styleUrls: ['./delivery-progress.component.css']
})
export class DeliveryProgressComponent implements OnInit {
  @Input() delivery;
  percentage: number
  constructor() { }

  ngOnInit(): void {
    this.percentage = this.delivery.current/this.delivery.total *100
  }

}
