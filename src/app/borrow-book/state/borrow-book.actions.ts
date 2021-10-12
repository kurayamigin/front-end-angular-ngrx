import { createAction, props } from '@ngrx/store';
import {BorrowBookBean} from "../borrow-book.bean";
import {CustomResponse} from "../../shared/response.model";

export const borrowBook = createAction(
  '[Book] Borrow Book',
  props<{ data: BorrowBookBean }>()
);

export const borrowBookSuccess = createAction(
  '[Book] Borrow Book Success',
  props<{ response: CustomResponse }>()
);

export const borrowBookFailure = createAction(
  '[MainList] Load Categories Failure',
  props<{ response: CustomResponse }>()
);


