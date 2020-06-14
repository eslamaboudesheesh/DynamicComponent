import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ChildsecondComponent } from './childsecond/childsecond.component';



@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    ChildComponent,
    ChildsecondComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    HttpClientModule,

    BrowserAnimationsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

