import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreCharsComponent } from './read-more-chars/read-more-chars.component';
import { ReadMoreRowsComponent } from './read-more-rows/read-more-rows.component';

@NgModule({
  declarations: [
    ReadMoreCharsComponent,
    ReadMoreRowsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReadMoreCharsComponent,
    ReadMoreRowsComponent
  ]
})
export class ReadmoreModule { }
