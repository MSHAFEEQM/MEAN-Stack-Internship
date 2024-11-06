import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewSampleComponentComponent } from './new-sample-component/new-sample-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewSampleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'component-sample';
}
