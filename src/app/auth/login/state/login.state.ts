import {DtoUser} from "../../../models/user/user.model";
import {CredentialsBean} from "./credentials.bean";

export interface LoginState {
  credentials: CredentialsBean
  message?: string
  code?: number
  showToast: boolean
}

export const initialState: LoginState = {
  credentials: {
    username: '',
    password: ''
  },
  message : '',
  code : 0,
  showToast: false,
};
