import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddformComponent } from './addform/addform.component';
import { FormsModule } from '@angular/forms';
import { StudentlistComponent } from './studentlist/studentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
