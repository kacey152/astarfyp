import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource-efficiency',
  templateUrl: './resource-efficiency.component.html',
  styleUrls: ['./resource-efficiency.component.css']
})
export class ResourceEfficiencyComponent implements OnInit {
  @Input() title: string;
  SES: number = 3.23
  MTS: number = 29
  MTO: number = 30

  constructor() { }

  ngOnInit(): void {
  }

}
