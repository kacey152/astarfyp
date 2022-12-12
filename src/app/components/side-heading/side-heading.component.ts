import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-side-heading',
  templateUrl: './side-heading.component.html',
  styleUrls: ['./side-heading.component.css']
})
export class SideHeadingComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
