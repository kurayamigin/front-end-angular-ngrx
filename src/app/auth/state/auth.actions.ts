import {createAction, props} from "@ngrx/store";
import {AuthCredentials} from "./auth.credentials";
import {CustomResponse} from "../../shared/response.model";

export const authLogin = createAction(
  '[Auth] Login',
  props<{credentials: AuthCredentials}>()
);

export const authLoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ response: CustomResponse }>()
);

export const authLoginFail = createAction(
  '[Auth] Login Fail',
  props<{ response : CustomResponse }>()
);

export const authenticate = createAction(
  '[Auth] Authenticate',
  props<{ credentials: AuthCredentials }>()
)

export const authenticationSuccess = createAction(
  '[Auth] Authentication Success',
  props<{ response: CustomResponse }>()
)
export const authenticationFail = createAction(
  '[Auth] Authentication Fail',
  props< { response: CustomResponse }>()
)

export const isAuthenticated = createAction(
  '[Auth] isAuthenticated',
  props<{ username: string }>()
);

export const logout = createAction(
  '[Auth] logout',
  props<{ username: string }>()
);

export const logoutSuccess = createAction(
  '[Auth] logout Success',
  props<{ response: CustomResponse }>()
)
export const logoutFail = createAction(
  '[Auth] logout Fail',
  props< { response: CustomResponse }>()
)
