import {DtoUser} from "../../../models/user/user.model";

export interface SignupState {
  user: DtoUser
  message?: string,
  code?: number
}

export const initialState: SignupState = {
  user: {
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: ''
  },
  message : '',
  code : 0
};
