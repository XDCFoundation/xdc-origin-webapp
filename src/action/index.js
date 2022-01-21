import { eventConstants } from "../constants";

export const handleWallet = (data) => ({
  type: eventConstants.CONNECT_WALLET,
  payload: data,
});

export const handleAccountDetails = (data) => ({
  type: eventConstants.LOGIN_SUCCESS,
  payload: data,
});

export const handleLogout = () => ({
  type: eventConstants.LOGOUT_SUCCESS,
  payload: null,
});

export const handleNavItem = (data) => ({
  type: eventConstants.SET_NAV_ITEM,
  payload: data,
});

export const handleSubNavItem = (data) => ({
  type: eventConstants.SET_SUBNAV_ITEM,
  payload: data,
});

export const handleSubNavToken = (data) => ({
  type: eventConstants.SET_SUBNAV_TOKEN,
  payload: data,
});
