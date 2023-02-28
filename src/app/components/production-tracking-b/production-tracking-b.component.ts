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
    { x: 100, y: 150, value: 1, textPosition: "bottom", process:"Milling" , status: 'completed' }, 
    { x: 100, y: 50, value: 2, textPosition: "top", process:"Measuring" , status: 'processing' },
    { x: 200, y: 50, value: 3, textPosition: "top", process:"Sparking" , status: 'queuing' },
    { x: 200, y: 150, value: 4, textPosition: "bottomLeft", process:"Assembly" ,  status: '' },
    { x: 300, y: 150, value: 1, textPosition: "top", process:"Reservoir Injection" , status: '' },
    { x: 400, y: 150, value: 2, textPosition: "right", process:"Membrane Assembly" , status: '' },
    { x: 400, y: 250, value: 3, textPosition: "bottom", process:"Laser Welding" , status: '' },
    { x: 500, y: 250, value: 4, textPosition: "bottom", process:"Screen Printing (D)" , status: '' },
    { x: 600, y: 250, value: 5, textPosition: "bottom", process:"Oven Curing (D)" , status: '' },
    { x: 700, y: 250, value: 6, textPosition: "bottom", process:"Screen Printing (H)" , status: '' },
    { x: 800, y: 250, value: 7, textPosition: "bottom", process:"Oven Curing (H)" , status: '' },
    { x: 900, y: 250, value: 8, textPosition: "bottom", process:"Screen Printing (D)" , status: '' },
    { x: 1000, y: 250, value: 9, textPosition: "bottom", process:"Oven Curing (D)" , status: '' },
    { x: 1100, y: 250, value: 10, textPosition: "bottom", process:"Laser Trimming" , status: '' },
    { x: 1200, y: 250, value: 11, textPosition: "bottom", process:"Cartridge Testing" , status: '' },
    { x: 1300, y: 250, value: 12, textPosition: "bottom", process:"Cartridge Print" , status: '' },
    { x: 1500, y: 250, value: 13, textPosition: "bottom", process:"Assembly Filling" , status: '' },
    { x: 1600, y: 250, value: 17, textPosition: "bottom", process:"Lean Packaging" , status: '' },
    { x: 1300, y: 50, value: 14, textPosition: "bottom", process:"Upper Case Print" , status: '' },
    { x: 1300, y: 150, value: 14, textPosition: "bottom", process:"Lower Case Print" , status: '' },
    { x: 1400, y: 150, value: 15, textPosition: "bottom", process:"Holder Assembly" , status: '' },
    { x: 1500, y: 150, value: 16, textPosition: "bottom", process:"Holder Testing" , status: '' },
    { x: 300, y: 250, value: 1, textPosition: "bottom", process:"Bottom Injection" , status: '' },
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
  getTextX(circle){
    if (circle.textPosition == "bottomLeft"){
      return circle.x - 30
    } 
    if (circle.textPosition == "right"){
      return circle.x + 40
    }
    return circle.x
  }
  getTextY(circle){
    if (circle.textPosition == "top" || circle.textPosition == "right" ){
      return circle.y - 40
    }
    return circle.y + 40
  }
  constructor() { }

  ngOnInit(): void {
  }

}
