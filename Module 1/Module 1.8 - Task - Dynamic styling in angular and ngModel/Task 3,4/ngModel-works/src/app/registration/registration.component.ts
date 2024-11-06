import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

    name = '';
    emailId = '';
    password = '';
    status = ''

    sendData(){
      console.log(this.name)
      console.log(this.emailId)
      console.log(this.password);
      if(this.name && this.emailId && this.password)
        this.status = 'ok'
      else
        this.status = ''
    }
  
  }
