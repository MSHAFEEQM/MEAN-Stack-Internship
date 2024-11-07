import { NgIf } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-bulb',
  standalone: true,
  imports: [NgIf],
  templateUrl: './toggle-bulb.component.html',
  styleUrl: './toggle-bulb.component.css'
})
export class ToggleBulbComponent {

    @Input() bulbState : string = ''
    @Output() stateChangeEvent = new EventEmitter<string>();

    stateChange(){
      this.stateChangeEvent.emit(this.bulbState);
    }

}
