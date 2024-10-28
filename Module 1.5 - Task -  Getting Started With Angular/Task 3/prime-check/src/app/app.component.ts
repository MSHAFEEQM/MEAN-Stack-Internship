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
  

  number  = 0;
  result  = ''
  checkPrime() {

    let isPrime =()=>{
    if (this.number <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(this.number); i++) {
      if (this.number % i === 0) 
        return false; 
    }
    return true; 
    }
    
     if(isPrime()===true){
      this.result = "Prime"
     }else
      this.result = "Not Prime"

  }
    
}
