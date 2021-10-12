import {createReducer, on} from "@ngrx/store";
import {initialState} from "./global.state";
import {hideToast, showToast} from "./global.actions";

export const globalReducer = createReducer(initialState,
  on(showToast, (state, action) => {
    return {
      ...state, toast: {
        show: true,
        message: action.message,
      }
    }
  }),
  on(hideToast, (state, action) => {
    return {...state, toast: {
        show: false,
        message: ""
      }
    }
  })
);
