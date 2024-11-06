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
  
  mark1 = 36;
  mark2 = 42;
  mark3 = 28;
  avgMark = 0;

  findAvgMark(){
    let total = this.mark1+this.mark2+this.mark3;
    this.avgMark = parseFloat((total/3).toPrecision(4));
  }
}
