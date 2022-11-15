import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'


@Component({
  selector: 'app-resource-tracking',
  templateUrl: './resource-tracking.component.html',
  styleUrls: ['./resource-tracking.component.css']
})

export class ResourceTrackingComponent implements OnInit,AfterViewInit {
  @ViewChild('canvas') //private canvasRef: ElementRef;

  private model: any;
  private loader = new GLTFLoader();
  private scene: THREE.Scene;

  //Scene
  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xd4d4d8);
    this.loader.load('assets/Inkjet_Printer_30%2', ( gltf: GLTF ) =>{
      this.model = gltf.scene.children[0];
      console.log(this.model);
      var box = new THREE.Box3().setFromObject(this.model);
      box.getCenter(this.model.position); //resets mesh position
      this.model.position.multiplyScalar(-1);
      this.scene.add(this.model);
    })
  };

  
  constructor() { 
    this.scene = new THREE.Scene();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createScene()
  }

}
