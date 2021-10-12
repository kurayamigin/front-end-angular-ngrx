import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GlobalState} from "./global.state";

export const selector = createFeatureSelector<GlobalState>('global')

export const selectToast = createSelector(
  selector,
  (state: GlobalState) => state.toast
);


