import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogClose,
  MatDialogActions,
  MatDialogContent
} from '@angular/material/dialog';

// Define the data structure for clarity (optional)
export interface ConfirmDialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.html',
  styleUrls: ['./confirmation-dialog.css'],
  imports: [
    MatDialogClose,
    MatDialogActions,
    MatDialogContent
  ],
  standalone: true
})
export class ConfirmationDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
  ) {}

  onDismiss(): void {
    // Pass 'false' when closing the dialog to indicate dismissal
    this.dialogRef.close(false);
  }
}
