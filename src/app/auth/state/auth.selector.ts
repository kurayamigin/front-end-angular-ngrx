import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./auth.state";

export const selector = createFeatureSelector<AuthState>('auth')

export const selectCredentials = createSelector(
  selector,
  (state: AuthState) => state.credentials
);

export const selectIsAuthenticate = createSelector(
  selector,
  (state: AuthState) => !!state.credentials.token
);
export const selectLoading = createSelector(
  selector,
  (state: AuthState) => state.loading
);
