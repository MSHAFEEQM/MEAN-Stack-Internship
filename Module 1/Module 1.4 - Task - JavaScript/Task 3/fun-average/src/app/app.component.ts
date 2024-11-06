import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fun-average';


  calculateAverage() {
    let numbers = [21, 26, 27, 31, 39, 34, 40, 55, 56, 42];
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    let average = total / numbers.length;
    console.log("The Average of given numbers is : ", parseFloat(average.toFixed(2)));
  }
  constructor() {

    this.calculateAverage();
  }


}
