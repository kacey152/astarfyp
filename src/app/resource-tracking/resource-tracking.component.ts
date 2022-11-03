import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



@Component({
  selector: 'app-resource-tracking',
  templateUrl: './resource-tracking.component.html',
  styleUrls: ['./resource-tracking.component.css']
})
export class ResourceTrackingComponent implements OnInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef;

  //Scene
  private createScene() {
    this.scene = new THREE.Scene();
    
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
