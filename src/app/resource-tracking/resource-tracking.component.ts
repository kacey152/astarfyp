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
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
  renderer = new THREE.WebGLRenderer();

  
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );
  }

}
