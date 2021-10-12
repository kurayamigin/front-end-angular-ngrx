import {createFeatureSelector, createReducer, on} from "@ngrx/store";
import {
  authenticate,
  authenticationFail,
  authenticationSuccess, logout, logoutFail, logoutSuccess,
} from "./auth.actions";
import {AuthState, initialState} from "./auth.state";

export const selector = createFeatureSelector<AuthState>('auth')

export const authReducer = createReducer(initialState,
   on(authenticate, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(authenticationSuccess,(state, action) => {
    return {
      ...state,
      credentials: action.response.data,
      loading: false
    }
  }),
  on(authenticationFail,(state, action) => {
    return {
      ...state,
      credentials: action.response.data,
      loading: false
    }
  }),on(logout, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(logoutSuccess,(state, action) => {
    return {
      ...state,
      credentials: action.response.data,
      loading: false
    }
  }),
  on(logoutFail,(state, action) => {
    return {
      ...state,
      credentials: action.response.data,
      loading: false
    }
  }),

)
