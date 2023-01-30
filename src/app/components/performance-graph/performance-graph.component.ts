import { Component, Input, OnInit, AfterViewInit} from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-performance-graph',
  templateUrl: './performance-graph.component.html',
  styleUrls: ['./performance-graph.component.css']
})
export class PerformanceGraphComponent implements OnInit {
  @Input() data: any;
  @Input() chartType: any;
  @Input() scales: any;
  @Input() plugins: any;
  
  chart: any;
  chartId: any;
  

  constructor() { }

  ngOnInit(): void {
    this.chartId = this.data.datasets[0].label;
    if(!this.scales) {
      this.scales = {
        y: {
            beginAtZero: true
        }
      };
    }
  }

  ngAfterViewInit(){
    this.createChart();
  }

  createChart(){

    var canvas = document.getElementById(this.chartId) as HTMLCanvasElement;
    var ctx = canvas.getContext('2d');
    this.chart = new Chart(ctx, {
      type: this.chartType, //this denotes the type of chart
      data: this.data,
      options: {
        aspectRatio: 2.5,
        scales: this.scales
    }      
    });
  }

}

