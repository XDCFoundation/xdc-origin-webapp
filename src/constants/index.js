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
        GET_TRANSACTION_DETAILS: "/searchBlockchainData",
        DELETE_XRC20_TOKEN: "/delete-xrc20token",
        GET_COIN_MARKET_CAP: "/getCoinMarketCap/USD",
        GET_DEPLOYED_XRC20TOKEN: "/get-deployed-xrc20token",
        UPDATE_CONTRACTS: "/update-social-media-urls",
        MINT_BURN_XRC20_TOKEN: "mint-burn-xrc20Token",
        TRANSFER_OWNERSHIP: "transfer-ownership-xrc20-token",
        PAUSE_RESUME_XRC20_TOKEN:"pause-resume-xrc20-token",
    },
};
export const apiBodyMessages = {
    STATUS_DEPLOYED: "DEPLOYED",
    STATUS_FAILED: "FAILED",
    STATUS_MINT: "mint",
    STATUS_BURN: "burn"
};
export const apiSuccessConstants = {
    DRAFTED_DATA_SUCCESS: "Saved Data as Draft",
    UPDATE_DATA_SUCCESS: "Contract Details Updated",
}
export const validationsMessages = {
    FORM_FIELD_ERROR : "Fill all required fields",
    VALIDATE_DESCRIPTION_LIMIT:"Description should not be more than 500 characters",
    VALIDATE_DESCRIPTION_FIELD:"Description is required",
    VALIDATE_DECIMAL_RANGE:'Decimal should be between 8-18',
    VALIDATE_DECIMAL_FIELD:'Decimal is required',
    VALIDATE_IMAGE_FIELD: 'Token image/icon is required',
    VALIDATE_TOKEN_SYMBOL_LIMIT:'Symbol should not be more than 15 characters',
    VALIDATE_TOKEN_SYMBOL_FIELD:'Symbol is required',
    VALIDATE_TOKEN_NAME_LIMIT:'Token Name should not be more than 30 characters',
    VALIDATE_TOKEN_NAME_FIELD:'Token name is required',
    VALIDATE_NETWORK: 'Network is required',
    VALIDATE_IMAGE_FIELD: "Token Image/Icon Field is required",
    VALIDATE_INITIAL_SUPPY_FIELD: "Token Initial Supply is required",
    TOASTS_POSITION: "top-center",
    TOKEN_SAVED_AS_DRAFT: "Token has been Saved as Draft",
    TOKEN_NAME_ERROR_MESSAGE: "Token with this name already exists",
    TOKEN_SYMBOL_ERROR_MESSAGE: "Token with this symbol already exists",
    VALIDATE_BROWSER_LOGIN: "Please Login To XDCPay",
    VALIDATE_BROWSER_REDIRECTING: "XDCPay Extension Not Available",
    INITIAL_SUPPLY_LIMIT_ERROR: "Initial Supply limit reached",
    INITIAL_SUPPLY_LIMIT_FOR_BURN_ERROR: "Burn quantity should be greater than 0 and less than current supply",
    MINT_QUANTITY_ERROR: "Mint quantity should be greater than 0",
    INVALID_ADDRESS_ERROR: "Invalid address",
    DISABLE_METAMSK_ERROR: "Disable metamask and login to XDCPay",
    WALLET_DETAILS_UPDATE_MESSAGE: "XDCPay wallet details has been updated",
}

export const toolTipContentMessages = {
    TOKEN_NETWORK_CONTENT: "Type of Network on which you wish to deploy your token",
    TOKEN_NAME_CONTENT: "Name of the token in 30 characters",
    TOKEN_SYMBOL_CONTENT: "A short name representing the token in 15 characters",
    TOKEN_IMAGE_CONTENT: "Icon of the token in the given format. You can also use the given default icon if you do not have the custom image.",
    TOKEN_DECIMAL_CONTENT: "Number of digits after the decimal when displaying token values on-screen. It ranges from 8 to 18, with 18 being the default value.",
    TOKEN_DESCRIPTION_CONTENT: "Description of token in 500 characters",
    TOKEN_WEBSITE_CONTENT: "Link of the official website of the token being deployed; if applicable",
    TOKEN_TWITTER_CONTENT: "Link of the official Twitter handle of the token; if applicable",
    TOKEN_TELEGRAM_CONTENT: "Link of the official Telegram channel of the token; if applicable",
    TOKEN_SUPPLY_CONTENT: "Number of tokens in circulation when the token starts to be traded on exchanges. The minimum value should be greater than one and the highest limit can be up to one hundred trillion dollars.",
}

export const addFeaturesContent = {
    PAUSABLE_CONTENT: "This specifies whether your token and all associated operations can be halted and resumed whenever needed.",
    BURNABLE_CONTENT:"This specifies whether your tokens can be burned to decrease the supply.",
    MINTABLE_CONTENT:"This specifies whether more tokens can be created to increase the initial supply.",
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
];

export const XDCPay_EXTENSION_URL = "https://chrome.google.com/webstore/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo?hl=en";

export const DASHBOARD_VIDEO_URL = "https://www.youtube.com/watch?v=K-tHZkV6zAs";

export const DEFAULT_TOKEN_IMAGE_URL = "https://xdc-mycontract-s3-dev.s3.amazonaws.com/userId/token-image/1644240946932.png";

export const LARGE_NUMBER = 999999999999999;

export const LARGE_NUMBER_ERROR = 9999999999999999;
