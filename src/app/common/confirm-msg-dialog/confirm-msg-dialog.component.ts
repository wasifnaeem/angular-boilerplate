import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

export interface IConfirmMsgDialog {
  statement: string
  placeholder: string
  errorMsg: string
  confirmButtonText: string
  cancelButtonText: string
}

@Component({
  selector: 'app-confirm-msg-dialog',
  templateUrl: './confirm-msg-dialog.component.html',
  styleUrls: ['./confirm-msg-dialog.component.scss']
})
export class ConfirmMsgDialogComponent {

  message: FormControl
  constructor(private dialogRef: MatDialogRef<ConfirmMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IConfirmMsgDialog) {
    this.message = new FormControl('', [Validators.required])
  }

  cancelAction() {
    this.dialogRef.close({ data: false })
  }

  confirmAction() {
    this.message.markAsTouched()
    if (this.message.valid)
      this.dialogRef.close({ data: this.message.value })
  }

}
