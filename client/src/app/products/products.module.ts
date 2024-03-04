import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClrDatagridModule } from '@clr/angular';
import { ClarityModule } from '@clr/angular';
import '@cds/core/icon/register.js';



import { ProductsRoutingModule } from './products-routing.module';
import { MarksComponent } from './marks/marks.component';
import { AddMarkComponent } from './marks/add-mark/add-mark.component';
import { UpdateMarkComponent } from './marks/update-mark/update-mark.component';
import { DeleteMarkComponent } from './marks/delete-mark/delete-mark.component';
import { CategoryComponent } from './category/category.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { ProductMangementComponent } from './product-mangement/product-mangement.component';


@NgModule({
  declarations: [
    MarksComponent,
    AddMarkComponent,
    UpdateMarkComponent,
    DeleteMarkComponent,
    CategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent,
    DetailCategoryComponent,
    ProductMangementComponent,
 

    
  ],
  imports: [
    CommonModule, ClarityModule ,ClrDatagridModule,
    ProductsRoutingModule,FormsModule, ReactiveFormsModule,
  ]
})
export class ProductsModule { }
