import { Component, Input, OnInit, AfterViewInit} from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-performance-graph',
  templateUrl: './performance-graph.component.html',
  styleUrls: ['./performance-graph.component.css']
})
export class PerformanceGraphComponent implements OnInit {
  @Input() data: any;
  
  chart: any;
  chartType: any;

  constructor() { }

  ngOnInit(): void {
    this.chartType = this.data.datasets[0].label;
  }

  ngAfterViewInit(){
    this.createChart();
  }

  createChart(){
    
    var canvas = document.getElementById(this.chartType) as HTMLCanvasElement;
    var ctx = canvas.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar', //this denotes the type of chart

      data: this.data,
      options: {
        aspectRatio: 2.5
      }
      
    });
  }

}