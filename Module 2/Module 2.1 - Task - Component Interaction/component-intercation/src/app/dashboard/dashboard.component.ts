import { Component } from '@angular/core';
import { ToggleBulbComponent } from '../toggle-bulb/toggle-bulb.component';
import { RatingComponent } from '../rating/rating.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ToggleBulbComponent,RatingComponent,NgFor,NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    // Task 1 code

  bulbInitialStatus = 'on';

  changeState(){
    if(this.bulbInitialStatus == 'on')
      this.bulbInitialStatus = 'off'
    else
      this.bulbInitialStatus = 'on'
  }

  // Task  2 code

  userRatings = [2,3,4];

  changeRate(rate:number,index:number){
    console.log(rate);
    console.log(index);
    this.userRatings[index] = rate;
    
    
  }

}
