import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  num1 : number = 15
  num2 : number = 16
  num3 : number = 19
  average : number = (this.num1+this.num2+this.num3)/3;

  mobile = { model : 'S24 Ultra', brand : 'Samsung' , price : 129999 }

}
