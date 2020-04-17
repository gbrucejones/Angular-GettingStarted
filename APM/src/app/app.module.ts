import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularReactDatesModule } from 'angular-react-dates';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { AngularReactDateComponent } from './shared/angular-react-dates';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent
    , WelcomeComponent
    //, AngularReactDateComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
    , RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent }
      , { path: '', redirectTo: 'welcome', pathMatch: 'full' }
      , { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      //, { path: '**', component: pageNotFoundComponent }
    ], {useHash: true})
    , ProductModule
    //, AngularReactDatesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
