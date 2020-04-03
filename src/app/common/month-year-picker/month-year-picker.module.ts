import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MonthYearPickerComponent } from './month-year-picker.component';

@NgModule({
  declarations: [
    MonthYearPickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  exports: [
    MonthYearPickerComponent
  ]
})
export class MonthYearPickerModule { }
