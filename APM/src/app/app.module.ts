import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';
import { AngularReactDatesModule } from 'angular-react-dates';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';

import { AngularReactDateComponent } from './shared/angular-react-dates';



@NgModule({
  declarations: [
    AppComponent
    , ProductListComponent
    , ConvertToSpacesPipe
    , StarComponent
    , AngularReactDateComponent
    //, HttpClientModule
    //, RouterModule
  ],
  imports: [
    BrowserModule
    , FormsModule
    , AngularReactDatesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
