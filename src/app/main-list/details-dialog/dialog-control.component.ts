import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  template: ''
})
export class DialogControlComponent {
  constructor(public dialog: MatDialog) {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogControlComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
