import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WelcomeMessageComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
    action = 'Show'
    show = true;
    toggleMessage(){
      if(this.action=='Show'){
        this.show = true;
        this.action = 'Hide'
      }
      else if(this.action == 'Hide'){
        this.action = 'Show';
        this.show = false;
      }
    }
}
