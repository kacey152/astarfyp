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
  inventory = {
    current: {
      // values on X-Axis
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Current Revenue', //chartId
          data: [11954.6, 11829.5, 272.8, 4636, 1990.1],
          borderWidth: '0',
        },
      ],
    },
    projected: {
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Projected Revenue', //chartId
          data: [11954.6, 1829.5, 11829.8, 272, 3659.1],
          borderWidth: '0',
        },
      ],
    }
  };

  changeCategory(category) {
    this.categorySelectedCurrentData = category.current;
    this.categorySelectedProjectedData = category.projected;
  }

  constructor() {}

  ngOnInit(): void {
    this.changeCategory(this.financials)
  }
}
