import { eventConstants, cookiesConstants } from "../constants";
import { sessionManager } from "../managers/sessionManager"

const accountDetails = sessionManager.getDataFromCookies(cookiesConstants.USER);
const sideNavDetails = sessionManager.getDataFromCookies(cookiesConstants.SIDE_NAV);

let initialState = {
  isLoggedIn: false,
  loginFailure: null,
  deviceId: null,
  sessionToken: null,
  loading: false,
  isForgotPasswordSuccess: false,
  isWalletOpen: false,
  activeNavItem: sideNavDetails ? sideNavDetails : null,
  subNavItems: false,
  subNavToken: null,
  accountDetails: {
    address: accountDetails ? accountDetails.address : null,
    network: accountDetails ? accountDetails.network : null,
    balance: accountDetails ? accountDetails.balance : null,
    isLoggedIn: accountDetails ? accountDetails.isLoggedIn : false,
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case eventConstants.SET_NAV_ITEM:
      sessionManager.setDataInCookies(action.payload ? action.payload : state.activeNavItem, cookiesConstants.SIDE_NAV);
      return {
        ...state,
        activeNavItem: action.payload,
      };
    
    case eventConstants.SET_SUBNAV_ITEM:
      return {
        ...state,
        subNavItems: action.payload,
      };
    
    case eventConstants.SET_SUBNAV_TOKEN:
      return {
        ...state,
        subNavToken: action.payload,
      };
    
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
    
      case eventConstants.UPDATE_ACCOUNT_DETAILS:
        sessionManager.setDataInCookies(action.payload ? action.payload : state.accountDetails, cookiesConstants.USER);
        return {
          ...state,
          accountDetails: action.payload,
        };
    
    default:
      return state;
  }
}
