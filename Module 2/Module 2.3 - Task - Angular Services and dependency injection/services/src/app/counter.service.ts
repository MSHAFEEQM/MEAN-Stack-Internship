import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counterValue : number = 0;

  constructor() { }

  incrementCounterValue(){

    this.counterValue++;

  }

  decrementCounterValue(){
    if(this.counterValue != 0)
        this.counterValue--;
  }

  getCurrentValue(){
    
    return this.counterValue;
  }

  resetCounterValue(){
    this.counterValue = 0
  }
}
