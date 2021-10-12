import {createFeatureSelector, createReducer, on} from "@ngrx/store";

import {initialState, SignupState} from "./signup.state";
import {authSignUp, authSignUpExit, authSignUpFail, authSignUpSuccess} from "./signin.action";

export const selector = createFeatureSelector<SignupState>('signup')

export const signupReducer = createReducer(initialState,
  on(authSignUp, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(authSignUpSuccess, (state, action) => {
    return {
      ...state,
      ...action.response,
      loading: false
    }
  }),
  on(authSignUpFail, (state, action) => {
    return {
      ...state,
      ...action.response,
      loading: false
    }
  }),
  on(authSignUpExit, (state, action) => {
    return initialState;
  }),
)
