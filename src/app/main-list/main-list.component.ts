import {Component, OnInit} from "@angular/core";
import {DtoBook} from "../models/book/book.model";
import {ICategory} from "../models/category/category.model";
import {Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
import {loadBooksByCategoriesIds, loadCategories} from "./state/main-list.actions";
import {MainListState} from "./state/main-list.state";
import {selectBooks, selectCategories} from "./state/main-list.selector";
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "./details-dialog/details-dialog.component";


@Component({
  selector: "main-list",
  templateUrl: "main-list.component.html",
  styleUrls: ['main-list.style.scss']
})
export class MainListComponent implements OnInit{
  books$: Observable<DtoBook[]> = this.store.select(selectBooks);
  categories$: Observable<ICategory[]> = this.store.select(selectCategories);
  done = new Subject();
  itemsPerCategory: number = 10;

  constructor(public store: Store<MainListState>, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.categories$.subscribe((categories) => {
      console.log(categories)
      let ids: number[] = [];
      categories.forEach((category) => ids.push(category.id));
      if(ids.length) this.store.dispatch(loadBooksByCategoriesIds({categoriesIds: ids}));
    });
    this.store.dispatch(loadCategories());
  }

  bookDetails(book: DtoBook) {
    this.dialog.open(DetailsDialogComponent, {
      panelClass: 'book-dialog-pane',
      data: book.id
    });
  }
}

