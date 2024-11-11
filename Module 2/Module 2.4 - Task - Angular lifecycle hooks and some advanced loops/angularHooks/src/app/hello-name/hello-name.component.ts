import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello-name',
  standalone: true,
  imports: [],
  templateUrl: './hello-name.component.html',
  styleUrl: './hello-name.component.css'
})
export class HelloNameComponent implements OnChanges {


  @Input() name : string =''

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Changes from Child Component : ", changes)
  }

}
