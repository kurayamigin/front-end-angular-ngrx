import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import {loadProfile, loadProfileSuccess} from "./profile.actions";
import {UserService} from "../../user.service";
import {DtoProfile} from "../../user.model";

@Injectable()
export class ProfileEffect {
  constructor(private actions$: Actions, private userService: UserService) {
  }

  loadProfile = createEffect(() => {
    return this.actions$.pipe(ofType(loadProfile),
      mergeMap( (action) => this.userService.getUser(action.username)),
      map((profile:DtoProfile)=> {
        return loadProfileSuccess({profile: profile});
      })
    )
  });



}
