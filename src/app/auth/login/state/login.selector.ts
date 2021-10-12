import {createFeatureSelector, createSelector} from "@ngrx/store";
import {LoginState} from "./login.state";

export const selector = createFeatureSelector<LoginState>('login')

export const selectCredentials = createSelector(
  selector,
  (state: LoginState) => state.credentials
);

export const selectCodeMessage = createSelector(
  selector,
  (state: LoginState) => state.code,
  (state: LoginState) => { return  {code: state.code, message: state.message} }
);

export const  selectShowToast = createSelector(selector, state=> state.showToast)
