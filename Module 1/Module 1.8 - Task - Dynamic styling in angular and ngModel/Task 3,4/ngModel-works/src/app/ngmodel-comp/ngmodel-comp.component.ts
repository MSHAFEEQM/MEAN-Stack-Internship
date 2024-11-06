import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngmodel-comp',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './ngmodel-comp.component.html',
  styleUrl: './ngmodel-comp.component.css'
})
export class NgmodelCompComponent {

  name ="";

}
