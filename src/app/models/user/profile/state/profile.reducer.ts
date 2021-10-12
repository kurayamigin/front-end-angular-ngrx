import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {loadProfile, loadProfileFail, loadProfileSuccess} from "./profile.actions";
import {initialState, ProfileState} from "./profile.state";

export const usersFeatureKey = 'users';

export const selector = createFeatureSelector<ProfileState>('profile')


export const selectProfile = createSelector(
  selector,
  (state: ProfileState) => state.profile
);


export const profileReducer = createReducer(
  initialState,
  on(loadProfile, (state, action) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.profile,
      loading: false
    }
  }),
  on(loadProfileFail, (state, action) => {
    return {
      ...state,
      loading: false
    }
  }),
);
