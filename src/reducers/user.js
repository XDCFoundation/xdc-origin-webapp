import { eventConstants } from "../constants";

let initialState = {
  isLoggedIn: false,
  loginFailure: null,
  deviceId: null,
  sessionToken: null,
  loading: false,
  isForgotPasswordSuccess: false,
  isWalletOpen: false,
  accountDetails: {
    address: null,
    network: null,
  },
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case eventConstants.CONNECT_WALLET:
      return {
        ...state,
        isWalletOpen: action.payload,
      };

    case eventConstants.LOGIN_SUCCESS:
      return {
        ...state,
        accountDetails: action.payload,
      };
    default:
      return state;
  }
}
