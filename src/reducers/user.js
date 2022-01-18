import { eventConstants, cookiesConstants } from "../constants";
import { sessionManager } from "../managers/sessionManager"

const accountDetails = sessionManager.getDataFromCookies(cookiesConstants.USER);

let initialState = {
  isLoggedIn: false,
  loginFailure: null,
  deviceId: null,
  sessionToken: null,
  loading: false,
  isForgotPasswordSuccess: false,
  isWalletOpen: false,
  accountDetails: {
    address: accountDetails ? accountDetails.address : null,
    network: accountDetails ? accountDetails.network : null,
    balance: accountDetails ? accountDetails.balance : null,
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
      sessionManager.setDataInCookies(action.payload ? action.payload : state.accountDetails, cookiesConstants.USER);
      return {
        ...state,
        accountDetails: action.payload,
        isLoggedIn: true,
      };
    case eventConstants.LOGOUT_SUCCESS:
      sessionManager.setDataInCookies(false, cookiesConstants.USER);
      return {
        ...state,
        accountDetails: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
