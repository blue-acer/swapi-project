import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'List', component:TableComponent},
  {path:'**', redirectTo:'List'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
