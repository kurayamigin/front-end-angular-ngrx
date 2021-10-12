import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CategoryService} from "../../models/category/category.service";

import {map, mergeMap} from "rxjs/operators";
import {BookService} from "../../models/book/book.service";
import {borrowBook, borrowBookFailure, borrowBookSuccess} from "./borrow-book.actions";
import {CustomResponse} from "../../shared/response.model";
import {ResponseCodes} from "../../shared/enums/responses-code.enum";
import {Store} from "@ngrx/store";
import {showToast} from "../../global-store/global.actions";

@Injectable()
export class BorrowBookEffects {
  constructor(private actions$: Actions, private bookService: BookService, private store: Store<{}>) {
  }

  borrowBook$ = createEffect(() => {
    return this.actions$.pipe(ofType(borrowBook),
      mergeMap( (action) => this.bookService.borrow(action.data)),
      map((response: CustomResponse)=> {
        this.store.dispatch(showToast({message: response.message}))
        if (response.code == ResponseCodes.SUCCESS)
          return borrowBookSuccess({response: response});
        else
          return borrowBookFailure({response: response})
      })
    )
  });

}
