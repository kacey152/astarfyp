import { Component, OnInit, } from '@angular/core';



@Component({
  selector: 'app-production-inventory',
  templateUrl: './production-inventory.component.html',
  styleUrls: ['./production-inventory.component.css']
})



export class ProductionInventoryComponent implements OnInit {
  //API call for the percentage here
  overallFill: number = 80;
  overallTurns: number = 10;
  constructor() { }

  ngOnInit(): void {
      //for testing, delete once done
    setInterval(() => this.manageProgress(), 150);
  }

  //for testing, delete once done
  manageProgress() {
    if (this.overallFill === 100) {
      this.overallFill = 0;
    } else {
      this.overallFill = this.overallFill + 1;
    }
  }

  getFillRate(rate: number) {
    let progressColour: String = rate >= 90? "green" :
      rate >= 80? "yellow" :
      "red"
    let style = {
      'left': (rate-3) + '%', 'color': progressColour
    }
    return style
  }

}
