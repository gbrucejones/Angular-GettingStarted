import { Component } from '@angular/core';


@Component({
  selector: 'app-angular-dates'
  //, template: '<angular-date-range-picker [(ngModel)]="selectedDateRange"></angular-date-range-picker>'
  , template: `<angular-single-date-picker [(ngModel)]="selectedDate">
                </angular-single-date-picker>`
})
export class AngularReactDateComponent {
  //isDayHighlighted: () => false;
  // renderCalendarDay: PropTypes.func,
  // renderDayContents: PropTypes.func,
  // enableOutsideDays: PropTypes.bool,
  // isDayBlocked: PropTypes.func,
  // isOutsideRange: PropTypes.func,
  // isDayHighlighted: PropTypes.func,

  public selectedDateRange: any = {


  };

  //isDayHighlighted: () => false


  ngOnChanges(): void {
    console.log('selectedDateRange='+this.selectedDateRange);
  }


}


