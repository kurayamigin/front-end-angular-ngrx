import { createAction, props } from '@ngrx/store';
import {DetailBookDto} from "../detail-book.dto";

export const loadBookDetails = createAction(
  '[DetailBook] Load Detail',
  props<{ id: number }>()
);

export const loadBookDetailsSuccess = createAction(
  '[DetailBook] Load Detail Success',
  props<{ book: DetailBookDto }>()
);

export const loadBookDetailsFailure = createAction(
  '[DetailBook] Load Detail Failure',
  props<{ data: any }>()
);

