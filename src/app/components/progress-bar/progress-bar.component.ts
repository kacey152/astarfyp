import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit {
  @Input() performanceType: String;
  @Input() category: String;

  //API call for the rate here
  percentage: number = 80;

  constructor() { }

  ngOnInit(): void {
      //for testing, delete once done
    setInterval(() => this.manageProgress(), 150);
  }

  //for testing, delete once done
  manageProgress() {
    if (this.percentage === 100) {
      this.percentage = 0;
    } else {
      this.percentage = this.percentage + 1;
    }
  }

  getPercentage(percentage: number) {
    let progressColour: String = percentage >= 90? "green" :
      percentage >= 80? "yellow" :
      "red"
    
    let style = {
      'left': (percentage-3) + '%', 'color': progressColour
    }
    return style
  }
}
