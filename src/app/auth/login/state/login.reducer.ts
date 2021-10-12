import {Action, createFeatureSelector, createReducer, on} from "@ngrx/store";

import {initialState, LoginState} from "./login.state";
import {
  authLogin, authLoginExit, authLoginFail,
  authLoginSuccess, hideLoginToast, showLoginToast,
} from "./login.action";

export const selector = createFeatureSelector<LoginState>('login')

export const loginReducer = createReducer(initialState,
  on(authLogin, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(authLoginSuccess, (state, action) => {
    return {
      ...state,
      ...action,
      showToast: true
    }
  }),
  on(authLoginFail, (state, action) => {
    return {
      ...state,
      code: action.code,
      message: action.message,
      showToast: true
    }
  }),
  on(authLoginExit, (state, action) => {
    return initialState;
  }),
  on(showLoginToast, (state, action) => {
    return {...state, showToast: true}
  }),
  on(hideLoginToast, (state, action) => {
    return {...state, showToast: false}
  })
)

export function reducer(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}
