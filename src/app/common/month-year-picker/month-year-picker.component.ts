import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { SubSink } from 'subsink';

const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export interface IDateRange {
  min: Date
  max: Date
}

@Component({
  selector: 'month-year-picker',
  templateUrl: './month-year-picker.component.html',
  styleUrls: ['./month-year-picker.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class MonthYearPickerComponent implements OnInit, OnChanges, OnDestroy {

  @Input('dateRange') dateRange: IDateRange
  @Output('onDateChange') ondateChange: EventEmitter<Date>;
  @Input() date = new FormControl();
  @Input() placeholder: string;
  subs: SubSink
  _date = new FormControl(moment());
  constructor() {
    this.subs = new SubSink()
    this.ondateChange = new EventEmitter();
  }

  ngOnInit() {
    this.onInputChange()
  }

  update_once: boolean = false
  ngOnChanges() {
    if (this.date && this.date.value && this.update_once == false) {
      this.update_once = true
      this._date.setValue(moment(this.date.value));
    }

    if (this.dateRange) {
      this.dateRange.min = this.dateRange.min == undefined ? null : this.dateRange.min
      this.dateRange.max = this.dateRange.max == undefined ? null : this.dateRange.max
    }
  }

  onInputChange() {
    this.subs.sink = this._date.valueChanges.subscribe(value => {
      this.ondateChange.emit(new Date(value));
    }, err => console.log(err));
  }

  chosenYearHandler(normalizedYear: moment.Moment) {
    const ctrlValue = this._date.value;
    ctrlValue.year(normalizedYear.year());
    this._date.setValue(ctrlValue);
  }

  chosenMonthHandler(normalizedMonth: moment.Moment, datepicker: MatDatepicker<moment.Moment>) {
    const ctrlValue = this._date.value;
    ctrlValue.month(normalizedMonth.month());
    this._date.setValue(ctrlValue);
    datepicker.close();
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}
