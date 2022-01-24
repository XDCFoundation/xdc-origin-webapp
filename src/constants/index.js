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
        GET_TRANSACTION_DETAILS: "getTransactionDetails"
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
    VALIDATE_DESCRIPTION_LIMIT:"Description should not be more than 500 characters",
    VALIDATE_DESCRIPTION_FIELD:"Description is required !",
    VALIDATE_DECIMAL_VALUE:"Decimal can't be 0",
    VALIDATE_DECIMAL_MAX_RANGE:'Decimal should not be more than 18',
    VALIDATE_DECIMAL_MIN_RANGE:'Decimal should not be less than 8',
    VALIDATE_DECIMAL_FIELD:'Decimal is required !',
    VALIDATE_IMAGE_FIELD: 'Token image/icon is required !',
    VALIDATE_TOKEN_SYMBOL_LIMIT:'Symbol should not be more than 15 characters',
    VALIDATE_TOKEN_SYMBOL_FIELD:'Symbol is required !',
    VALIDATE_TOKEN_NAME_LIMIT:'Token Name should not be more than 30 characters',
    VALIDATE_TOKEN_NAME_FIELD:'TokenName is required !',
    VALIDATE_NETWORK: 'Network is required !',
}
export const addFeaturesContent = {
    PAUSABLE_CONTENT:"Keeps the tokens “totalSupply” value up to date, Useful in case someone wants to burn some tokens to reduce the supply for their project or burn unsold tokens",
    MINTABLE_CONTENT:"Building distribution / crowdsale logic directly into the token contract or by including a generic mint function that can be called by an external contract.",
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
