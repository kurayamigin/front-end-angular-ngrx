import { createAction, props } from '@ngrx/store';
import {DtoProfile} from "../../user.model";

export const loadProfile = createAction(
  '[Profile] Load Profile',
  props<{ username: string}>()
);

export const loadProfileSuccess = createAction(
  '[Profile] Load Profile Success',
  props<{ profile: DtoProfile }>()
);

export const loadProfileFail = createAction(
  '[Profile] Load Profile Fail',
  props<{ profile: DtoProfile }>()
);
