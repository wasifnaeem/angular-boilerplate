import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InternetStatusComponent } from './internet-status.component';
import { InternetStatusService } from './internet-status.service';

@NgModule({
  declarations: [
    InternetStatusComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InternetStatusComponent
  ],
  providers: [
    InternetStatusService
  ]
})
export class InternetStatusModule { }
