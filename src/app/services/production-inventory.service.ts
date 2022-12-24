import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductionInventoryService {
  //API call here
  data: any = {
    overall:{fill:80, turns: 70, value: 60},
    semifinished: {fill:80, turns: 70, value: 60},
    raw: {fill:80, turns: 70, value: 60}
}

  constructor() { }

  getValue(performanceType, category){
    return this.data[category][performanceType]
  }
}
