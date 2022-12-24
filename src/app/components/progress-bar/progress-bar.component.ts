import { Component, OnInit, Input } from '@angular/core';
import { ProductionInventoryService } from 'app/services/production-inventory.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit {
  @Input() performanceType: String;
  @Input() category: String;
  constructor(private productionInventory: ProductionInventoryService) { }
  //retrieve fillrate/ turns/ value
  value: number
  percentage: number
  unit: string

  //edit method to calculate the cutoff for each type of inventory performance
  getPercentage(){
    if (this.performanceType == "fill"){
      return this.value
    } else if (this.performanceType == "turns") {
      return this.value
    } else if (this.performanceType == "value"){
      return this.value
    } else {
      return null
    }
  }

  ngOnInit(): void {
      //for testing, delete once done
    setInterval(() => this.manageProgress(), 150);
    this.value = this.productionInventory.getValue(this.performanceType, this.category)
    this.percentage = this.getPercentage()
    this.unit = this.performanceType == "fill"? "%" :
    this.performanceType == "value" ? "SGD" : ""
  }

  //for testing, delete once done
  manageProgress() {
    if (this.percentage === 100) {
      this.percentage = 0;
    } else {
      this.percentage = this.percentage + 1;
    }
  }

  getPercentageStyle(percentage: number) {
    let progressColour: String = percentage >= 90? "green" :
      percentage >= 80? "yellow" :
      "red"
    
    let style = {
      'left': (percentage-3) + '%', 'color': progressColour
    }
    return style
  }
}
