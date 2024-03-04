import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {
  
  @Input() 
  idMark:any
  @Output()
  closed= new EventEmitter<boolean>()
  ngOnInit(): void {  
  }

  actionClose()
  {this.closed.emit(true) }

  }

