import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  number1 = '';
  number2 = '';
  result =0
  addNumbers(){
      this.result = parseInt(this.number1)+parseInt(this.number2); 
  }
}
