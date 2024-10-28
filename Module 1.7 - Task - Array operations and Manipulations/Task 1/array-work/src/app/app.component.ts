import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  names  = ['Rahul', 'Ashiq', 'Salman', 'Arjun', 'Sara', 'Fathima', 'Dominic']
}
