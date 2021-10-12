import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, mergeMap, switchMap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {
  authenticate,
  authenticationFail,
  authenticationSuccess, logout, logoutFail, logoutSuccess,
} from "./auth.actions";
import {Action} from "@ngrx/store";
import {AuthService} from "../auth.service";
import {ResponseCodes} from "../../shared/enums/responses-code.enum";
import {from} from "rxjs";

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService) {
  }

  authenticate$ = createEffect(() => {
    return this.actions$.pipe(ofType(authenticate),
      mergeMap( (action) => from(this.authService.authenticateCredentials(action.credentials)).pipe(
        map((response) => {
          if (response.code == ResponseCodes.SUCCESS)
            return authenticationSuccess({ response: response });
          else
            return authenticationFail({ response: response });
        })
      ))
    )
  });

  logot$ = createEffect(() => {
    return this.actions$.pipe(ofType(logout),
      mergeMap( (action) => this.authService.logout(action.username)),
      map((response)=> {
        if (response.code == ResponseCodes.SUCCESS) {
          localStorage.removeItem('username');
          return logoutSuccess({response: response});
        }
        else
          return logoutFail({ response: response });
      })
    )
  });
}
