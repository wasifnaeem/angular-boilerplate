import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckListComponent } from './check-list.component';

@NgModule({
  declarations: [
    CheckListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckListComponent
  ]
})
export class CheckListModule { }
