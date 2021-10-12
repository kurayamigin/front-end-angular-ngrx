import {CustomResponse} from "../../shared/response.model";

export interface BorrowBookState {
  borrowed: boolean;
  response: CustomResponse
}

export const initialState: BorrowBookState = {
  borrowed: false,
  response: {
    data: null,
    code: 0,
    message: ""
  }
};

