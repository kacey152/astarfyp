import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-management-kpi-c',
  templateUrl: './management-kpi-c.component.html',
  styleUrls: ['./management-kpi-c.component.css'],
})
export class ManagementKpiCComponent implements OnInit {
  @Output() categorySelected = new EventEmitter<any>();
  categorySelectedCurrentData: any;
  categorySelectedProjectedData: any;

  financials = {
    current: {
      // values on X-Axis
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Current Revenue', //chartId
          data: [21954.6, 1829.5, 29272.8, 14636, 3659.1],
          borderWidth: '0',
        },
      ],
    },
    projected: {
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Projected Revenue', //chartId
          data: [21954.6, 1829.5, 29272.8, 14636, 3659.1],
          borderWidth: '0',
        },
      ],
    }
  };

  changeCategory(category) {
    this.categorySelected.emit(category);
  }

  constructor() {}

  ngOnInit(): void {
    this.categorySelected.subscribe((data) => {
      this.categorySelectedCurrentData = data.current;
      this.categorySelectedProjectedData = data.projected;
    });
    this.changeCategory(this.financials);
  }
}
