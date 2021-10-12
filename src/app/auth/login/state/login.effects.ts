import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {map, mergeMap, switchMap, tap} from "rxjs/operators";
import {AuthService} from "../../auth.service";
import {authLogin, authLoginFail, authLoginSuccess} from "./login.action";
import {LoginState} from "./login.state";
import {CustomResponse} from "../../../shared/response.model";
import {Store} from "@ngrx/store";
import {ResponseCodes} from "../../../shared/enums/responses-code.enum";
import {authenticate} from "../../state/auth.actions";

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private authService: AuthService, private store: Store<LoginState>) {
  }

  login$ = createEffect(() => {
    return this.actions$.pipe(ofType(authLogin),
      mergeMap( (action) => this.authService.login(action.data)),
      map((response:CustomResponse)=> {
        if (response.code == ResponseCodes.INVALID_DATA)
          return authLoginFail(response);
        else {
          this.store.dispatch(authenticate({credentials: response.data}))
          console.log(response.data);
          localStorage.setItem('username', response.data.username)
          return authLoginSuccess(response);
        }
      })
    )
  });

}
