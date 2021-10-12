import {createReducer, on} from "@ngrx/store";
import {initialState} from "./borrow-book.state";
import {borrowBook, borrowBookFailure, borrowBookSuccess} from "./borrow-book.actions";

export const borrowBookReducer = createReducer(initialState,
  on(borrowBook, (state, action) => {
    return {
      ...state,
      borrowed: false
    }
  }),
on(borrowBookSuccess, (state, action) => {
  return {
    ...state,
    response: action.response,
    borrowed: true
  }
}),
  on(borrowBookFailure, (state, action) => {
    return {
      ...state,
      response: action.response,
      borrowed: false
    }
  }),
  )
