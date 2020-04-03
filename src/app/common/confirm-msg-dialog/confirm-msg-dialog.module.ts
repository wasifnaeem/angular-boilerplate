import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ConfirmMsgDialogComponent } from './confirm-msg-dialog.component';

@NgModule({
  declarations: [ConfirmMsgDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    // Angular Material
    MatInputModule,
    MatButtonModule,
  ]
})
export class ConfirmMsgDialogModule { }
