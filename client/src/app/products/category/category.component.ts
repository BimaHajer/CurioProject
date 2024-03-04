import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  users: any;
  constructor(private service :ServiceService){
    
  }
  ngOnInit(): void {
    this.getUsers()
  } 
  getUsers(){
    this.service.getData().subscribe(data=>{
      console.log('data',data)
      this.users=data
    })
  }
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
