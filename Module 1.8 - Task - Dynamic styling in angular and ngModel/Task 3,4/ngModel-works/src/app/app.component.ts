import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgmodelCompComponent } from './ngmodel-comp/ngmodel-comp.component';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgmodelCompComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
