import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ManagementComponent } from './users/management/management.component';

const routes: Routes = [
  {
    path:"", component: UsersComponent,
  },
  {
    path:"management", component:ManagementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
