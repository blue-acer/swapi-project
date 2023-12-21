import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './list/table/table.component';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path: '', loadChildren: () => import('./list/list.module').then(m => m.ListModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
