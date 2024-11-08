import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgClass,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  filterValue : string = ''
  selectedCriteria : string = '0'
  filterValueNum : any 


  users = [
    {name: 'John', age: 25, mark: 85 },
    {name: 'Jane', age: 22, mark: 90 },
    {name: 'Mike', age: 30, mark: 78 },
    {name: 'Anna', age: 28, mark: 92 },
    {name: 'Chris', age: 26, mark: 88 },
    {name: 'Minos', age: 23, mark: 35 }
    ];

    setCriteria(){
      console.log(this.selectedCriteria);
      this.filterValueNum = parseInt(this.filterValue)
      
    }
}
