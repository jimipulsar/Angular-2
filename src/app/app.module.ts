import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SecondoComp} from './secondo-component/secondo-comp.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondoComp,
    TableComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
