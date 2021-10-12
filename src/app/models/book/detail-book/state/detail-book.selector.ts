import {createFeatureSelector, createSelector} from "@ngrx/store";
import {DetailBookState} from "./detail-book.state";
import {LoginState} from "../../../../auth/login/state/login.state";

export const selector = createFeatureSelector<DetailBookState>('detailBook')


export const selectBookDetails = createSelector(
  selector,
  (state: DetailBookState) => state.book
);

