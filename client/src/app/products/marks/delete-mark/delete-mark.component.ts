import { Component ,OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-mark',
  templateUrl: './delete-mark.component.html',
  styleUrls: ['./delete-mark.component.css']
})
export class DeleteMarkComponent implements OnInit {
@Input() 
idMark:any
@Output()
closed= new EventEmitter<boolean>()
ngOnInit(): void {
  
}
actionClose()
{this.closed.emit(true) }
}
