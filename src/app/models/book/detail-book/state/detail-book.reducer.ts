import {createReducer, on} from "@ngrx/store";
import {initialState} from "./detail-book.state";
import {loadBookDetails, loadBookDetailsFailure, loadBookDetailsSuccess} from "./detail-book.actions";

export const detailBookReducer = createReducer(initialState,
on(loadBookDetails, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
on(loadBookDetailsSuccess, (state, action) => {
  return {
    ...state,
    book: action.book,
    loading: false
  }
}),
  on(loadBookDetailsFailure, (state, action) => {
    return {
      ...state,
      loading: false
    }
  }),

)
