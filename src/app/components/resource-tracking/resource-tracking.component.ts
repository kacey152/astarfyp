import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';



@Component({
  selector: 'app-resource-tracking',
  templateUrl: './resource-tracking.component.html',
  styleUrls: ['./resource-tracking.component.css']
})

export class ResourceTrackingComponent {
  mts =[
    {name:"Injection Moulding", powerStatus:"", electricalStatus:"", disposalStatus:"warning"},
    {name:"InfraRed Oven 1", powerStatus:"bad", electricalStatus:"bad", disposalStatus:""},
    {name:"Infrared Oven 2", powerStatus:"bad", electricalStatus:"bad", disposalStatus:"bad"},
    {name:"Screen Printer 1", powerStatus:"bad", electricalStatus:"bad", disposalStatus:""},
    {name:"Screen Printer 2", powerStatus:"bad", electricalStatus:"bad", disposalStatus:""},
    {name:"Membrane Assembly", powerStatus:"", electricalStatus:"", disposalStatus:""},
    {name:"Laser Welding", powerStatus:"bad", electricalStatus:"bad", disposalStatus:""},
    {name:"Laser Trimming", powerStatus:"bad", electricalStatus:"bad", disposalStatus:""},
    {name:"Cartridge Tester", powerStatus:"bad", electricalStatus:"bad", disposalStatus:""},
]
  ses =[
    {name:"Milling", powerStatus:"", electricalStatus:"", disposalStatus:""},
    {name:"EDM", powerStatus:"", electricalStatus:"bad", disposalStatus:""},
    {name:"CMM", powerStatus:"", electricalStatus:"bad", disposalStatus:""},
    {name:"Robotic Arm", powerStatus:"", electricalStatus:"", disposalStatus:""},
]
  mto =[
    {name:"Holder Assembly", powerStatus:"good", electricalStatus:"bad", disposalStatus:""},
    {name:"Scent Filling", powerStatus:"bad", electricalStatus:"bad", disposalStatus:""},
    {name:"Holder Tester", powerStatus:"", electricalStatus:"", disposalStatus:""},
    {name:"Inkjet Printer", powerStatus:"good", electricalStatus:"bad", disposalStatus:""},
    {name:"LEAN Packaging", powerStatus:"", electricalStatus:"", disposalStatus:""},
]
  getColour(status: String){
    switch (status){
      case "good":
        return "green"
      case "bad":
        return "red"
      case "warning":
        return "yellow"
      default:
        return ""
    }
  }
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
