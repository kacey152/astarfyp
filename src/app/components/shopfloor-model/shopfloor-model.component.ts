import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { OutlineEffect } from 'three-effectcomposer-es6';


@Component({
  selector: 'app-shopfloor-model',
  templateUrl: './shopfloor-model.component.html',
  styleUrls: ['./shopfloor-model.component.css']
})
export class ShopfloorModelComponent implements OnInit,AfterViewInit {
  @ViewChild('canvas') 

  private canvasRef: ElementRef;

    //* Stage Properties

    @Input() public fieldOfView: number = 2;

    @Input('nearClipping') public nearClippingPane: number = 1;
  
    @Input('farClipping') public farClippingPane: number = 10000;

    machines = {
      Machine1: "good",
      Machine2: "bad",
      Machine3: "warning",
      Machine4: "good",
      Machine5: "bad",
      Machine6: "warning",
      Machine7: "good",
      Machine8: "bad",
      Machine9: "good",
      Machine10: "good",
      Machine11: "bad",
      Machine12: "warning",
      Machine13: "good",
      Machine14: "good",
      Machine15: "",
      MachineS1: "",
      MachineS2: "",
      MachineS3: "warning",
      MachineS4: "good",
    }

    //? Scene properties
    private camera: THREE.PerspectiveCamera;

    private controls: OrbitControls;
  
    private ambientLight: THREE.AmbientLight;
  
    private light1: THREE.PointLight;
  
    private light2: THREE.PointLight;
  
    private light3: THREE.PointLight;
  
    private light4: THREE.PointLight;
  
    private model: any;
  
    private directionalLight: THREE.DirectionalLight;
  
    //? Helper Properties (Private Properties);
  
    private get canvas(): HTMLCanvasElement {
      return this.canvasRef.nativeElement;
    }
  
    private loaderGLTF = new GLTFLoader();
  
    private renderer: THREE.WebGLRenderer;
  
    private scene: THREE.Scene;
    
    private animateModel() {
      if (this.model) {
        this.model.rotation.z += 0.005;
      }
    }

    private createControls = () => {
      const container = document.getElementsByClassName('item2')[0];
      const renderer = new CSS2DRenderer();
      renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = `${this.canvas.offsetTop}px`;
      renderer.domElement.style.left = `${this.canvas.offsetLeft}px`;
      renderer.domElement.style.width = `${this.canvas.clientWidth}px`;
      renderer.domElement.style.height = `${this.canvas.clientHeight}px`;
      container.appendChild(renderer.domElement);
      this.controls = new OrbitControls(this.camera, renderer.domElement);
      this.controls.autoRotate = true;
      this.controls.enableZoom = true;
      this.controls.enablePan = false;
      this.controls.update(); 
    };

    private createScene() {
      //* Scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color("#14181b")
      this.loaderGLTF.load('assets/draft2.gltf', (gltf: GLTF) => {
        this.model = gltf.scene;
        this.model.scale.set(0.3, 0.3, 0.3);
        var box = new THREE.Box3().setFromObject(this.model);
        box.getCenter(this.model.position); // this re-sets the mesh position
        this.model.position.multiplyScalar(-1);
        
        // Set each block to its own colour
        this.model.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.name == "Floor"){
              child.material = new THREE.MeshBasicMaterial({ color: "grey" });
            } else{             
              let status = this.machines[child.name]
              let statusColor = status == "good" ? "green" : 
                status == "warning" ? "yellow" :
                status == "bad" ? "red" : "white"
              child.material = new THREE.MeshBasicMaterial({ color: statusColor });
              // Add an outline to the mesh

              // Create an outline geometry
              let outlineGeometry = new THREE.EdgesGeometry(child.geometry, 1); // 1 is the width of the outline
              // Create an outline material
              let outlineMaterial = new THREE.LineBasicMaterial({ color: "black" });
              // Create the outline mesh
              let outlineMesh = new THREE.LineSegments(outlineGeometry, outlineMaterial);
              outlineMesh.scale.multiplyScalar(1.00);
              child.add(outlineMesh);
            }
          }
        });
        this.scene.add(this.model);
      });
      //*Camera
      let aspectRatio = this.getAspectRatio();
      this.camera = new THREE.PerspectiveCamera(
        this.fieldOfView,
        aspectRatio,
        this.nearClippingPane,
        this.farClippingPane
      )
      this.camera.position.x = 100;
      this.camera.position.y = 100;
      this.camera.position.z = 100;
      this.ambientLight = new THREE.AmbientLight(0x00000, 100);
      this.scene.add(this.ambientLight);
      this.directionalLight = new THREE.DirectionalLight(0xffdf04, 0.4);
      this.directionalLight.position.set(0, 1, 0);
      this.directionalLight.castShadow = true;
      this.scene.add(this.directionalLight);
      this.light1 = new THREE.PointLight(0x4b371c, 10);
      this.light1.position.set(0, 200, 400);
      this.scene.add(this.light1);
      // this.light2 = new THREE.PointLight(0x4b371c, 10);
      // this.light2.position.set(500, 100, 0);
      // this.scene.add(this.light2);
      // this.light3 = new THREE.PointLight(0x4b371c, 10);
      // this.light3.position.set(0, 100, -500);
      // this.scene.add(this.light3);
      // this.light4 = new THREE.PointLight(0x4b371c, 10);
      // this.light4.position.set(-500, 300, 500);
      // this.scene.add(this.light4);
    }
    private getAspectRatio() {
      return this.canvas.clientWidth / this.canvas.clientHeight;
    }

    private startRenderingLoop() {
      //* Renderer
      // Use canvas element in template
      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
      this.renderer.setPixelRatio(devicePixelRatio);
      this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
      let component: ShopfloorModelComponent = this;
      (function render() {
        component.renderer.render(component.scene, component.camera);

        requestAnimationFrame(render);
      }());
    }

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }

}
