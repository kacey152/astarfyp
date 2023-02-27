import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-tracking-b',
  templateUrl: './production-tracking-b.component.html',
  styleUrls: ['./production-tracking-b.component.css']
})
export class ProductionTrackingBComponent implements OnInit {
  orderNumber: String = "SAMPLE"
  radius = 25
  circles = [
    { x: 100, y: 150, value: 1, status: 'completed' },
    { x: 100, y: 50, value: 2, status: 'processing' },
    { x: 200, y: 50, value: 3, status: 'queuing' },
    { x: 200, y: 150, value: 4, status: '' },
    { x: 300, y: 150, value: 1, status: '' },
    { x: 400, y: 150, value: 2, status: '' },
    { x: 400, y: 250, value: 3, status: '' },
    { x: 500, y: 250, value: 4, status: '' },
    { x: 600, y: 250, value: 5, status: '' },
    { x: 700, y: 250, value: 6, status: '' },
    { x: 800, y: 250, value: 7, status: '' },
    { x: 900, y: 250, value: 8, status: '' },
    { x: 1000, y: 250, value: 9, status: '' },
    { x: 1100, y: 250, value: 10, status: '' },
    { x: 1200, y: 250, value: 11, status: '' },
    { x: 1300, y: 250, value: 12, status: '' },
    { x: 1500, y: 250, value: 13, status: '' },
    { x: 1600, y: 250, value: 17, status: '' },
    { x: 1300, y: 50, value: 14, status: '' },
    { x: 1300, y: 150, value: 14, status: '' },
    { x: 1400, y: 150, value: 15, status: '' },
    { x: 1500, y: 150, value: 16, status: '' },
    { x: 300, y: 250, value: 1, status: '' },

    // add more circles as needed
  ];
  

  getColor(status: string): string {
    switch (status) {
      case 'completed': return '#15d7c0';
      case 'processing': return '#7cbcf2';
      case 'queuing': return '#f2f3f2';
      default: return 'gray';
    }
  }

  getx1(index: number){
    let prevCircle = this.circles[index-1]
    let currCircle = this.circles[index]
    let difference = prevCircle.x - currCircle.x
    if (difference > 0){
      return prevCircle.x - this.radius
    }
    else if (difference < 0){
      return prevCircle.x + this.radius
    }
    else{
      return prevCircle.x
    }
  }
  getx2(index: number){
    let prevCircle = this.circles[index-1]
    let currCircle = this.circles[index]
    let difference = prevCircle.x - currCircle.x
    if (difference > 0){
      return currCircle.x + this.radius
    }
    else if (difference < 0){
      return currCircle.x - this.radius
    }
    else{
      return currCircle.x
    }
  }
  gety1(index: number){
    let prevCircle = this.circles[index-1]
    let currCircle = this.circles[index]
    let difference = prevCircle.y - currCircle.y
    if (difference > 0){
      return prevCircle.y - this.radius
    }
    else if (difference < 0){
      return prevCircle.y + this.radius
    }
    else{
      return prevCircle.y
    }
  }
  gety2(index: number){
    let prevCircle = this.circles[index-1]
    let currCircle = this.circles[index]
    let difference = prevCircle.y - currCircle.y
    if (difference > 0){
      return currCircle.y + this.radius
    }
    else if (difference < 0){
      return currCircle.y - this.radius
    }
    else{
      return currCircle.y
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
