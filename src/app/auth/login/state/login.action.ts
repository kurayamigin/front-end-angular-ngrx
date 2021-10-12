import { createAction, props } from '@ngrx/store';
import {LoginState} from "./login.state";
import {DtoUser} from "../../../models/user/user.model";
import {DtoBook} from "../../../models/book/book.model";
import {CredentialsBean} from "./credentials.bean";
import {CustomResponse} from "../../../shared/response.model";

export const authLogin = createAction(
  '[Auth] Login',
  props<{data: CredentialsBean}>()
);

export const authLoginSuccess = createAction(
  '[Auth] Login Success',
  props<CustomResponse>()
);

export const authLoginFail = createAction(
  '[Auth] Login Fail',
  props<CustomResponse>()
);
export const authLoginExit = createAction(
  '[Auth] Login Exit'
);

export const showLoginToast = createAction(
  '[Auth] Login Toast Show'
);

export const hideLoginToast = createAction(
  '[Auth] Login Toast Hide'
);
