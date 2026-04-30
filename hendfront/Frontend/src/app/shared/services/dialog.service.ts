import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {ConfirmationDialog, ConfirmDialogData} from '../components/confirmation-dialog/confirmation-dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  confirm(data: ConfirmDialogData): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      data: data,
      disableClose: true // User must use buttons to close
    });

    // Returns an Observable that emits the value passed when the dialog closes
    return dialogRef.afterClosed();
  }
}
