import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'app-production-inventory',
  templateUrl: './production-inventory.component.html',
  styleUrls: ['./production-inventory.component.css']
})



export class ProductionInventoryComponent implements OnInit {
  progressValue: number = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
