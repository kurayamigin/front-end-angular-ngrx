export interface GlobalState {
  toast: {
    show: boolean,
    message: string
  };

}

export const initialState: GlobalState = {
  toast: {
    show: false,
    message: ''
  }
};

