import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

    @Input() rating : number = 0

    @Output() rateChangeEvent = new EventEmitter<number>();

    rateStars = [1,2,3,4,5];

    changeRate(rate : number){
      // console.log(rate)
      this.rateChangeEvent.emit(rate)
    }
}
