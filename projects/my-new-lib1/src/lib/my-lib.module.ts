import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleTextboxComponent } from './multiple-textbox/multiple-textbox.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MultipleTextboxComponent],
  imports: [
    CommonModule, BrowserModule , FormsModule
  ],
  exports : [MultipleTextboxComponent]
})
export class MyLibModule { }
