/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

export const httpConstants = {
  METHOD_TYPE: {
    POST: "POST",
    PUT: "PUT",
    GET: "GET",
    DELETE: "DELETE",
  },
  CONTENT_TYPE: {
    APPLICATION_JSON: "application/json",
    MULTIPART_FORM_DATA: "multipart/form-data",
    APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
    IMAGE_PNG: "image/png",
  },
  DEVICE_TYPE: {
    WEB: "web",
  },
  API_END_POINT: {
    GET_DRAFT_FAILD_XRC20_TOKEN: "/get-draft-failed-xrc20token",
    GET_XRC20TOKEN_BY_ID : "/get-xrc20Token-by-id"
  },
};

export const eventConstants = {
  CONNECT_WALLET: "CONNECT_WALLET",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS"
};

export const cookiesConstants = {
  ACCESS_TOKEN: "accessToken",
  EXPIRES_AT: "expiresAt",
  USER: "user",
};
