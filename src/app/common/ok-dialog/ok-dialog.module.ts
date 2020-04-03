import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { OkDialogComponent } from './ok-dialog.component';

@NgModule({
  declarations: [OkDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class OkDialogModule { }
