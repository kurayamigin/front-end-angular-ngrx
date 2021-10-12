import {createSelector} from "@ngrx/store";
import {MainListState} from "./main-list.state";
import {selector} from "./main-list.reducer";

export const selectCategories = createSelector(
  selector,
  (state: MainListState) => state.categories
);

export const selectBooks = createSelector(
  selector,
  (state: MainListState) => state.books
);
