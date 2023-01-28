import {SET_AUTHENTICATED, SET_USER} from '../types/user.type'

interface IUserState {
  authenticated: boolean;
  userInfo: any;
}

const initialState: IUserState = {
  authenticated: false,
  userInfo: {},
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_USER:
      return {
        authenticated: true,
        userInfo: {...action.payload},
      };



    default:
      return state;
  }
}
