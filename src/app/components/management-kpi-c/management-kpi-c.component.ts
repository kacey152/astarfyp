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
  operations = {
    current: {
      // values on X-Axis
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Current Revenue', //chartId
          data: [1954.6, 1129.5, 27.8, 463, 190.1],
          borderWidth: '0',
        },
      ],
    },
    projected: {
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Projected Revenue', //chartId
          data: [1154.6, 189.5, 1189.8, 72, 369.1],
          borderWidth: '0',
        },
      ],
    }
  };
  productivity = {
    current: {
      // values on X-Axis
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Current Revenue', //chartId
          data: [19154.6, 11229.5, 227.8, 4163, 1910.1],
          borderWidth: '0',
        },
      ],
    },
    projected: {
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Projected Revenue', //chartId
          data: [11154.6, 1891.5, 11819.8, 712, 3619.1],
          borderWidth: '0',
        },
      ],
    }
  };
  customer = {
    current: {
      // values on X-Axis
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Current Revenue', //chartId
          data: [2124.6, 12139.5, 22327.8, 41323, 2320.1],
          borderWidth: '0',
        },
      ],
    },
    projected: {
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Projected Revenue', //chartId
          data: [121354.6, 1831.5, 13219.8, 7132, 3329.1],
          borderWidth: '0',
        },
      ],
    }
  };
  safety = {
    current: {
      // values on X-Axis
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Current Revenue', //chartId
          data: [24214.6, 121429.5, 224227.8, 44223, 23420.1],
          borderWidth: '0',
        },
      ],
    },
    projected: {
      labels: ['Material', 'Others', 'Maintenance', 'Profit', 'Labour'],
      datasets: [
        {
          label: 'Projected Revenue', //chartId
          data: [12244.6, 1831.5, 4219.8, 714.2, 34229.1],
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
