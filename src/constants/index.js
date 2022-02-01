/**
 * Created by Ayush Kulshrestha on 18/09/2019.
 */

export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        IMAGE_PNG: 'image/png'
    },
    DEVICE_TYPE: {
        WEB: 'web'
    },
    API_END_POINT: {
        SAVE_TOKEN: "save-xrc20token-as-draft",
        UPDATE_TOKEN: "update-xrc20token",
        GET_DRAFT_FAILD_XRC20_TOKEN: "/get-draft-failed-xrc20token",
        GET_XRC20TOKEN_BY_ID : "/get-xrc20Token-by-id",
        GET_TRANSACTION_DETAILS: "getTransactionDetails",
        DELETE_XRC20_TOKEN: "/delete-xrc20token",
        GET_COIN_MARKET_CAP: "/getCoinMarketCap/USD"
    },
};
export const apiBodyMessages = {
    STATUS_DEPLOYED: "DEPLOYED",
};
export const apiSuccessConstants = {
    DRAFTED_DATA_SUCCESS: "Saved Data as Draft",
    UPDATE_DATA_SUCCESS: "Contract Details Updated",
}
export const validationsMessages = {
    FORM_FIELD_ERROR : "Fill all required fields !!",
    VALIDATE_DESCRIPTION_LIMIT:"Description should not be more than 500 characters",
    VALIDATE_DESCRIPTION_FIELD:"Description is required !",
    VALIDATE_DECIMAL_RANGE:'Decimal should be between 8-18',
    VALIDATE_DECIMAL_FIELD:'Decimal is required !',
    VALIDATE_IMAGE_FIELD: 'Token image/icon is required !',
    VALIDATE_TOKEN_SYMBOL_LIMIT:'Symbol should not be more than 15 characters',
    VALIDATE_TOKEN_SYMBOL_FIELD:'Symbol is required !',
    VALIDATE_TOKEN_NAME_LIMIT:'Token Name should not be more than 30 characters',
    VALIDATE_TOKEN_NAME_FIELD:'TokenName is required !',
    VALIDATE_NETWORK: 'Network is required !',
    VALIDATE_IMAGE_FIELD: "Token Image/Icon Field is required !",
    VALIDATE_INITIAL_SUPPY_FIELD: "Token Initial Supply is required !",
    TOASTS_POSITION: "top-center",
    TOKEN_SAVED_AS_DRAFT: "Token has been Saved as Draft",
    TOKEN_NAME_ERROR_MESSAGE: "Token with this name already exists!",
    TOKEN_SYMBOL_ERROR_MESSAGE: "Token with this symbol already exists!",
    VALIDATE_BROWSER_LOGIN: "Please Login To XDCPay !",
    VALIDATE_BROWSER_REDIRECTING: "Redirect To Download XDC PAY App !",
}
export const addFeaturesContent = {
    PAUSABLE_CONTENT: "This specifies whether your token and all associated operations can be halted and resumed whenever needed.",
    BURNABLE_CONTENT:"This specifies whether your tokens can be burned to decrease the supply.",
    MINTABLE_CONTENT:"Minting specifies, whether more tokens can be created to increase the initial supply.",
}

export const eventConstants = {
  CONNECT_WALLET: "CONNECT_WALLET",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  UPDATE_ACCOUNT_DETAILS: "UPDATE_ACCOUNT_DETAILS",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  SET_NAV_ITEM: "SET_NAV_ITEM",
  SET_SUBNAV_ITEM: "SET_SUBNAV_ITEM",
  SET_SUBNAV_TOKEN: "SET_SUBNAV_TOKEN",
};

export const cookiesConstants = {
  ACCESS_TOKEN: "accessToken",
  EXPIRES_AT: "expiresAt",
  USER: "user",
  SIDE_NAV: "sideNav",
  SUBNAV_ITEM: "subNavItem",
  SUBNAV_TOKEN: "subNavToken",
};

export const colors = [
  '#5bdd95',
  '#5bddcf',
  '#47b1ee',
  '#3677ee',
  '#7e27d0',
  '#631fa3',
  '#d025ce',
  '#f12498',
  '#f1611a',
  '#f8c013',
]