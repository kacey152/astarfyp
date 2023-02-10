import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';


@Component({
  selector: 'app-resource-tracking',
  templateUrl: './resource-tracking.component.html',
  styleUrls: ['./resource-tracking.component.css']
})

export class ResourceTrackingComponent implements OnInit,AfterViewInit {
  @ViewChild('canvas') 
  private canvasRef: ElementRef;

    //* Stage Properties

    @Input() public fieldOfView: number = 2;

    @Input('nearClipping') public nearClippingPane: number = 1;
  
    @Input('farClipping') public farClippingPane: number = 10000;

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
      this.scene.background = new THREE.Color("grey")
      this.loaderGLTF.load('assets/samplefloor.gltf', (gltf: GLTF) => {
        this.model = gltf.scene.children[0];
        this.model.scale.set(0.03, 0.03, 0.03);
        // this.model.material.color.setHex( 0x808080 )
        console.log(this.model);
        var box = new THREE.Box3().setFromObject(this.model);
        box.getCenter(this.model.position); // this re-sets the mesh position
        this.model.position.multiplyScalar(-1);
        
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
      let component: ResourceTrackingComponent = this;
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
