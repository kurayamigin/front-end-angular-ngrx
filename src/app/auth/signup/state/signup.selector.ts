import {createFeatureSelector, createSelector} from "@ngrx/store";
import {SignupState} from "./signup.state";

export const selector = createFeatureSelector<SignupState>('signup')

export const selectUser = createSelector(
  selector,
  (state: SignupState) => state.user
);

export const selectCode = createSelector(
  selector,
  (state: SignupState) => state.code
);
export const selectCodeMessage = createSelector(
  selector,
  selectCode,
  (state: SignupState) => { return  {code: state.code, message: state.message} }
);

