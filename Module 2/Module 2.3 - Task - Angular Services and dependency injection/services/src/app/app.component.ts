import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';
import { CounterService } from './counter.service';
import { CalculatorService } from './calculator.service';
import { StorageService } from './storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  // All Service files are Injected
  constructor(private logService  : LoggerService, private counterService : CounterService, 
              private calcService : CalculatorService, private storeService : StorageService){

    logService.logMessage("Message logged from Logger Service")

  }

  // Task 1 : Logger service 

  logMessage : string = ''

  callLogger(){
    this.logService.logMessage(this.logMessage)
  }

  // Task 2 : Counter Service
  counterValue : number = 0

  incrementCounter(){
    this.counterService.incrementCounterValue();
    this.counterValue = this.counterService.getCurrentValue();
  }
  decrementCounter(){
    this.counterService.decrementCounterValue();
    this.counterValue = this.counterService.getCurrentValue();
  }
  resetCounter(){
    this.counterService.resetCounterValue();
    this.counterValue = this.counterService.getCurrentValue();
  }

  //Task 3 : Calculator
  calcNum2!: number ;
  calcNum1!: number ;
  calcAnswer!: number;
  symbol : string = ''

  add(){
    
    this.calcAnswer = this.calcService.addNumbers(this.calcNum1,this.calcNum2)
    this.symbol = '+'
    }
  sub(){

    this.calcAnswer = this.calcService.subNumbers(this.calcNum1,this.calcNum2)
    this.symbol = '-'
    }
  mul(){

    this.calcAnswer = this.calcService.mulNumbers(this.calcNum1,this.calcNum2)
    this.symbol = 'x'
    }
  div(){

    this.calcAnswer = this.calcService.divNumbers(this.calcNum1,this.calcNum2)
    this.symbol = '/'
    }


  // task 4 : Local Storage

  user = {
    name : '',
    place : ''
  }

  retrievedValue :any =''

  storeData(){

    this.storeService.storeItem(this.user)

  }

  retrieveData(){

    this.retrievedValue = this.storeService.retrieveItem();

  }

  deleteData(){

    this.storeService.removeItem();
    this.retrievedValue = ''

  }
}
