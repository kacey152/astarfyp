import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-production-inventory',
  templateUrl: './production-inventory.component.html',
  styleUrls: ['./production-inventory.component.css']
})



export class ProductionInventoryComponent implements OnInit {
  delayData = {// values on X-Axis
    labels: ['LEAN Packaging', 'Smart Engineering System', 'Scent Filling', 'Cartridge Print', 'Holder Assy BL', 
    'Lower Case Print BL', 'Holder Assy', 'Lower Case Print', ], 
     datasets: [
      {
        label: "Delay", //chartId
        data: ['80','70', '10', '8', '5',
             '5', '5', '5'],
        backgroundColor: 'red'
      },
    ]
  }

  defectData = {// values on X-Axis
    labels: ['Catridge Testing', 'Laser Welding', 'Laser Trimming', 'Cartridge Print', 'Holder Test', 
    'InkJet Printing', 'Hexagon_CMM01', 'Makino_EDM01', 'Makino_HSC01', 'IR Oven Curing', 'Screen Printing', ], 
     datasets: [
      {
        label: "Defect", //chartId
        data: ['80','30', '10', '8', '5',
             '5', '5', '5', '3', '2', '1'],
        backgroundColor: 'red'
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {

  }

}
