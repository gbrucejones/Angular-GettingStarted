import { Component } from '@angular/core';


@Component({
  selector: 'app-angular-dates',
  template: '<angular-date-range-picker [(ngModel)]="selectedDateRange"></angular-date-range-picker>'
})
export class MyComponent {}
// ABOVE name should match whatevername i want the component to be --- refe'd in app module
