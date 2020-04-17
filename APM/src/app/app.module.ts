import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AngularReactDatesModule } from 'angular-react-dates';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces';
import { StarComponent } from './shared/star.component';
import { AngularReactDateComponent } from './shared/angular-react-dates';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent
    , ProductListComponent
    , ConvertToSpacesPipe
    , StarComponent
    , AngularReactDateComponent
    , ProductDetailComponent
    , WelcomeComponent
    //, RouterModule
  ],
  imports: [
    BrowserModule
    , FormsModule
    , AngularReactDatesModule.forRoot()
    , HttpClientModule
    , RouterModule.forRoot([
      { path: 'products', component: ProductListComponent }
      ,{
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      }
      , { path: 'welcome', component: WelcomeComponent }
      , { path: '', redirectTo: 'welcome', pathMatch: 'full' }
      , { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
      //, { path: '**', component: pageNotFoundComponent }
    ], {useHash: true})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
