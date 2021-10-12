import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CategoryService} from "../../models/category/category.service";

import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";
import {BookService} from "../../models/book/book.service";
import * as fromMainListActions from "./main-list.actions";
import {ICategory} from "../../models/category/category.model";
import {loadBooksByCategoriesIds} from "./main-list.actions";

@Injectable()
export class MainListEffects {
  constructor(private actions$: Actions, private categoryService: CategoryService, private bookService: BookService) {
  }

  loadCategoriesAndBooks$ = createEffect(() => {
    return this.actions$.pipe(ofType(fromMainListActions.loadCategories),
      mergeMap( (action) => this.categoryService.query()),
      map((categories:ICategory[])=> {
        return fromMainListActions.loadCategoriesSuccess({categories: categories});
      })
    )
  });

  loadBooksByCategoriesIds$ = createEffect(() => {
    return this.actions$.pipe(ofType(fromMainListActions.loadBooksByCategoriesIds),
      mergeMap((action) => {
        return this.bookService.loadByCategoriesId(action.categoriesIds)
          .pipe( map(books=> {
              return fromMainListActions.loadBooksSuccess({books});
          }))
      })
    )
  });


}
