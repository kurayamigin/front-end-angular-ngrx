import { createAction, props } from '@ngrx/store';
import {ICategory} from "../../models/category/category.model";
import {DtoBook} from "../../models/book/book.model";


export const loadCategories = createAction(
  '[MainList] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[MainList] Load Categories Success',
  props<{ categories: ICategory[] }>()
);

export const loadCategoriesFailure = createAction(
  '[MainList] Load Categories Failure',
  props<{ data: any }>()
);

export const loadBooks = createAction(
  '[MainList] Load DtoBooks');

export const loadBooksSuccess = createAction(
  '[MainList] Load DtoBooks Success',
  props<{ books: DtoBook[] }>()
);

export const loadBooksFailure = createAction(
  '[MainList] Load DtoBooks Failure',
  props<{ data: any }>()
);

export const loadBooksByCategoriesIds = createAction(
  '[MainList] Load DtoBooksByCategoriesIds',
  props<{ categoriesIds: number[] }>()
);

