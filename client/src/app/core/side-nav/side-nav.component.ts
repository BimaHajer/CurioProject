import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNAVComponent {
  products: any[] = [
    { id: 1, category: '', price:'', caracteristique: '' },
    { id: 2, category: '', price:'', caracteristique: '' },
   
    // Ajoutez d'autres utilisateurs selon vos besoins
  ];
  clickProduct:any[];
  constructor(){
    this.clickProduct=this.products;
  }

}
