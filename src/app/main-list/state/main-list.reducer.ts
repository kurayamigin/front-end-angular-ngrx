import {createFeatureSelector, createReducer, on} from "@ngrx/store";
import {initialState, MainListState} from "./main-list.state";
import {
  loadBooks,
  loadBooksByCategoriesIds,
  loadBooksSuccess,
  loadCategories,
  loadCategoriesSuccess
} from "./main-list.actions";

export const selector = createFeatureSelector<MainListState>('mainList')

export const mainListReducer = createReducer(initialState,
  on(loadCategories, (state, action) => {
    return {
      ...state,
      loading: {...state.loading, categories: true}
    }
  }),
on(loadCategoriesSuccess, (state, action) => {
  return {
    ...state,
    categories: action.categories,
    loading: {...state.loading, categories: false}
  }
}),
  on(loadBooks, (state, action) => {
    return {
      ...state,
      loading: {...state.loading, books: true}
    }
  }),
  on(loadBooksSuccess, (state, action) => {
    return {
      ...state,
      books: action.books,
      loading: {
        ...state.loading,
        books: false
      }
    }
  }),
  on(loadBooksByCategoriesIds, (state, action) => {
    return {
      ...state,
      loading: {
        ...state.loading,
        books: true
      }
    }
  })
  )
