import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    HttpClientModule,

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

