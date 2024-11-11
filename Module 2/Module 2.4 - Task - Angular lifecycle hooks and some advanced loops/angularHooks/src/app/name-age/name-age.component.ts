import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloNameComponent } from '../hello-name/hello-name.component';

@Component({
  selector: 'app-name-age',
  standalone: true,
  imports: [FormsModule,HelloNameComponent],
  templateUrl: './name-age.component.html',
  styleUrl: './name-age.component.css'
})
export class NameAgeComponent implements OnChanges{


  @Input() name : string = '';
  @Input() age : number = 0 ;

  nameToSend : string = ''


  ngOnChanges(changes: SimpleChanges): void {
      console.log("Changes from parent side : " , changes)

  }

}
