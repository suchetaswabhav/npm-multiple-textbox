import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule } from './../../projects/my-new-lib1/src/lib/my-lib.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
