import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  height= "100%";
  width= "100%";
  zoom = 8;
  constructor() { }

  ngOnInit(): void {
  }

}
