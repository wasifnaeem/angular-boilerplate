import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './summary.component';
import { ReadmoreModule } from '../read-more/read-more.module';

@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReadmoreModule,
  ],
  exports: [
    SummaryComponent
  ],
  providers: [
  ]
})
export class SummaryModule { }
