import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgIf, FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectTab1: boolean = false;
  selectTab2: boolean = true;

  name: string = '';
  mark: string = '';
  place: string = '';
  avarageMark :number = 0;

  names: string[] = ['Rahul','Afeef','Miya'];
  marks: number[] = [25,47,12];
  places: string[]=['Calicut','Kannur','Kollam'];

  errName: boolean = false;
  errNameMessage = ''
  dupliValueFound: boolean = false
  errMark: boolean = false;
  success: boolean = false;

  constructor(){
    this.calculateAvg();
  }
  getSelectedTab1() {
    this.selectTab1 = true;
    this.selectTab2 = false;
  }
  getSelectedTab2() {
    this.selectTab2 = true;
    this.selectTab1 = false;

  }
  setClearFields() {
    this.name = ''
    this.mark = ''
    this.place = ''
    this.errMark = false;
    this.errName = false;
    this.success = false;
    this.errNameMessage = ''
  }


  addUser() {
    
    if (this.name.length >= 3) {
      this.errName = false
      if (parseInt(this.mark) >= 0 && parseInt(this.mark) <= 50) {
        this.errMark = false;
        this.names.forEach((element) => {
          if (element == this.name) {
            this.dupliValueFound = true
          }
        })
        if (this.dupliValueFound == true) {
          this.errNameMessage = 'Duplicate Name not Allowed..!'
          this.errName = true
          this.dupliValueFound = false
        }
        else {
          this.names.push(this.name);
          this.places.push(this.place);
          this.marks.push(parseInt(this.mark));
          this.errName = false;
          this.setClearFields()
          this.success = true;
          this.calculateAvg();
        }

        console.log(this.names);
        console.log(this.places);
        console.log(this.marks);

      } else {
        this.errMark = true
      }
    } else {
      this.errNameMessage = 'Name Should be Minimum of 3 Letters..!'
      this.errName = true
    }
  }

// list Table code 

      calculateAvg(){
        let total = 0;
        this.marks.forEach(mark=>{
            total += mark;
        })
        this.avarageMark = parseFloat((total/this.marks.length).toPrecision(4));
      }

    deleteRow(index : number){
          this.names.splice(index,1);
          this.marks.splice(index,1);
          this.places.splice(index,1);
          this.calculateAvg();

    }


}
