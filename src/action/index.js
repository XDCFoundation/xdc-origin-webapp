import { eventConstants } from "../constants";

export const handleWallet = (data) => ({
  type: eventConstants.CONNECT_WALLET,
  payload: data,
});

export const handleAccountDetails = (data) => ({
  type: eventConstants.LOGIN_SUCCESS,
  payload: data,
});
