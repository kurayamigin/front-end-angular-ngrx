import {createFeatureSelector, createSelector} from "@ngrx/store";
import {BorrowBookState} from "./borrow-book.state";
import {MainListState} from "../../main-list/state/main-list.state";

export const selector = createFeatureSelector<BorrowBookState>('borrowBook')

export const selectBorrowed = createSelector(
  selector,
  (state: BorrowBookState) => state.borrowed
);
