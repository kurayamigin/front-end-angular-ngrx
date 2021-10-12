import { createAction, props } from '@ngrx/store';
import {DtoUser} from "../../../models/user/user.model";
import {CustomResponse} from "../../../shared/response.model";

export const authSignUp = createAction(
  '[Auth] SignUp',
  props<{data: DtoUser}>()
);

export const authSignUpSuccess = createAction(
  '[Auth] SignUp Success',
  props<{ response: CustomResponse }>()
);

export const authSignUpFail = createAction(
  '[Auth] SignUp Fail',
  props<{ response: CustomResponse }>()
);
export const authSignUpExit = createAction(
  '[Auth] SignUp Exit'
);
