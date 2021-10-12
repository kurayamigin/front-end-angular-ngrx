import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DtoBook} from "../../models/book/book.model";
import {BorrowBookState} from "../../borrow-book/state/borrow-book.state";
import {Store} from "@ngrx/store";
import {borrowBook} from "../../borrow-book/state/borrow-book.actions";
import {AuthState} from "../../auth/state/auth.state";
import {selectCredentials} from "../../auth/state/auth.selector";
import {AuthCredentials} from "../../auth/state/auth.credentials";
import {FormControl, FormGroup} from "@angular/forms";
import {selectBorrowed} from "../../borrow-book/state/borrow-book.selector";

@Component({
  selector: 'details-dialog',
  templateUrl: 'details-dialog.component.html',
  styleUrls: ['details-dialog.style.scss']
})
export class DetailsDialogComponent implements OnInit{
  title: string = '';
  borrowing: boolean = false;
  datetime = new FormGroup({
    date: new FormControl()
  });
  processingBorrowed!: boolean;
  credentials!: AuthCredentials;
  constructor(
    public dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number, private borrowStore: Store<BorrowBookState>, private authStore : Store<AuthState>) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.authStore.select(selectCredentials).subscribe((credentials) => {
      this.credentials = credentials;
    });
    this.borrowStore.select(selectBorrowed).subscribe((borrowed)=>  {
      if (borrowed) this.borrowing = false;
    });
  }

  borrow() {
    if (!this.credentials.username) return;
    const data = {
      username: this.credentials.username,
      bookId: this.data,
      datetime: this.datetime.value.date
    }
    if (this.datetime.value.date) this.borrowStore.dispatch(borrowBook({data:data}))
  }
}
