import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delivery-progress',
  templateUrl: './delivery-progress.component.html',
  styleUrls: ['./delivery-progress.component.css']
})
export class DeliveryProgressComponent implements OnInit {
  @Input() delivery;
  constructor() { }

  ngOnInit(): void {
  }

}
