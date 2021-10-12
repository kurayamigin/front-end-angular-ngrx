import {AuthCredentials} from "./auth.credentials";

export interface AuthState {
  credentials: AuthCredentials,
  loading: boolean
}

export const initialState: AuthState = {
  credentials: {
    username: '',
    token: ''
  },
  loading: false
}
