import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarksComponent } from './marks/marks.component';
import { AddMarkComponent } from './marks/add-mark/add-mark.component';
import { UpdateMarkComponent } from './marks/update-mark/update-mark.component';
import { DeleteMarkComponent } from './marks/delete-mark/delete-mark.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';

const routes: Routes = [
  {
    path:"marks", component:MarksComponent
  },
  {
    path:"marks/add", component:AddMarkComponent
  },
  {
    path:"marks/update", component:UpdateMarkComponent
  },
  
  {
    path:"marks/delete", component:DeleteMarkComponent
  },
  {
    path:"category", component:CategoryComponent
  },
  {
    path:"category/add", component:AddCategoryComponent
  },
  {
    path:"category/update", component:UpdateCategoryComponent
  },
  {
    path:"category/delete", component:DeleteCategoryComponent
  },
 
  {
    path:"category/detail", component:DetailCategoryComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
