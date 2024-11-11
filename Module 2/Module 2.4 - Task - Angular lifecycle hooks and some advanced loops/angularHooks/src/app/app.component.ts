import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameAgeComponent } from './name-age/name-age.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NameAgeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  name : string = "Shafeeq"
  age : number = 30 
}
