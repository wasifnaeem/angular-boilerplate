import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectRatingComponent } from './select-rating.component';

@NgModule({
  declarations: [SelectRatingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SelectRatingComponent
  ]
})
export class SelectRatingModule { }
