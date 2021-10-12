import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import {loadBookDetails, loadBookDetailsSuccess} from "./detail-book.actions";
import {BookService} from "../../book.service";
import {DetailBookDto} from "../detail-book.dto";

@Injectable()
export class DetailBookEffects {
  constructor(private actions$: Actions, private bookService: BookService) {
  }

  loadBookDetails$ = createEffect(() => {
    return this.actions$.pipe(ofType(loadBookDetails),
      mergeMap( (action) => this.bookService.getDetails(action.id)),
      map((book:DetailBookDto)=> {
        return loadBookDetailsSuccess({book: book});
      })
    )
  });



}
