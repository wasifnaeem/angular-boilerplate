import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  cancel() {
    this.dialogRef.close({ data: false })
  }

  confirm() {
    this.dialogRef.close({ data: true })
  }

}
