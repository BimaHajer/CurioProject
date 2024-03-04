import { Component } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css'],
  
})
export class MarksComponent {
  show=false
  idmark=1
  showClick()
  {
    this.show=true
  }
  close(){
    this.show=false
  }
}
 