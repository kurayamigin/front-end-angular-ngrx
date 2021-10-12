import {DtoProfile} from "../../user.model";


export interface ProfileState {
  loading: boolean;
  profile: DtoProfile;

}

export const initialState: ProfileState = {
  profile: {
      username: '',
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      id: 0
    },
  loading: false
};
