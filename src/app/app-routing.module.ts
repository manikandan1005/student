import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './addform/addform.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {
    path:'form',component:AddformComponent
  },
  {
    path:'list',component:StudentlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
