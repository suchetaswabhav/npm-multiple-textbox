import { NgModule } from '@angular/core';
import { MyNewLib1Component } from './my-new-lib1.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [MyNewLib1Component],
  imports: [BrowserModule
  ],
  exports: [MyNewLib1Component]
})
export class MyNewLib1Module { }
