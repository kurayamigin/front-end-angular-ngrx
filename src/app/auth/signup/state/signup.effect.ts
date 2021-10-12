import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {map, mergeMap} from "rxjs/operators";
import {AuthService} from "../../auth.service";
import {authSignUp, authSignUpFail, authSignUpSuccess} from "./signin.action";
import {CustomResponse} from "../../../shared/response.model";
import {ResponseCodes} from "../../../shared/enums/responses-code.enum";

@Injectable()
export class SignupEffect {
  constructor(private actions$: Actions, private authService: AuthService) {
  }

  signup$ = createEffect(() => {
    return this.actions$.pipe(ofType(authSignUp),
      mergeMap( (action) => this.authService.signup(action.data)),
      map((response:CustomResponse)=> {
        if (response.code == ResponseCodes.INVALID_DATA) return authSignUpFail({response:response});
        else
        return authSignUpSuccess({response:response});
      })
    )
  });



}
