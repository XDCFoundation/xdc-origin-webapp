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
    FORM_FIELD_ERROR : "Fill All Required Fields",
    VALIDATE_DESCRIPTION_LIMIT:"Description Should Not Be More Than 500 Characters",
    VALIDATE_DESCRIPTION_FIELD:"Description Is Required",
    VALIDATE_DECIMAL_RANGE:'Decimal Should Be Between 8-18',
    VALIDATE_DECIMAL_FIELD:'Decimal Is Required',
    VALIDATE_IMAGE_FIELD: 'Token Image/Icon Is Required',
    VALIDATE_TOKEN_SYMBOL_LIMIT:'Symbol Should Not Be More Than 15 Characters',
    VALIDATE_TOKEN_SYMBOL_FIELD:'Symbol Is Required',
    VALIDATE_TOKEN_NAME_LIMIT:'Token Name Should Not Be More Than 30 Characters',
    VALIDATE_TOKEN_NAME_FIELD:'Token Name Is Required',
    VALIDATE_NETWORK: 'Network Is Required',
    VALIDATE_IMAGE_FIELD: "Token Image/Icon Field Is Required",
    VALIDATE_INITIAL_SUPPY_FIELD: "Token Initial Supply Is Required",
    TOASTS_POSITION: "top-center",
    TOKEN_SAVED_AS_DRAFT: "Token Has Been Saved As Draft",
    TOKEN_NAME_ERROR_MESSAGE: "Token With This Name Already Exists",
    TOKEN_SYMBOL_ERROR_MESSAGE: "Token With This Symbol Already Exists",
    VALIDATE_BROWSER_LOGIN: "Please Login To XDCPay",
    VALIDATE_BROWSER_REDIRECTING: "XDCPay Extension Not Available",
    INITIAL_SUPPLY_LIMIT_ERROR: "Initial Supply Limit Reached",
    INITIAL_SUPPLY_LIMIT_FOR_BURN_ERROR: "Burn Quantity Should Be Greater Than 0 and Less Than Current Supply",
    MINT_QUANTITY_ERROR: "Mint Quantity Should Be Greater Than 0",
    INVALID_ADDRESS_ERROR: "Invalid Address",
    DISABLE_METAMSK_ERROR: "Disable Metamask and Login To XDCPay",
    WALLET_DETAILS_UPDATE_MESSAGE: "XDCPay Wallet Details Has Been Updated",
    CURRENT_TOKEN_OWNER: "This Address Is The Current Token Owner",
    TOKEN_ADDED_SUCCESS: "Token Added To XDCPay Wallet",
    TOKEN_ADDED_FAILURE: "Unable To Add Token To XDCPay Wallet",
    TOKEN_ALREADY_ADDED_SUCCESS: "Token Already Added To XDCPay Wallet",
    COULD_NOT_BURN_TOKENS: "Could not burn the tokens",
    INITIAL_SUPPLY_MAX_LIMIT_ERROR: "Initial Supply Should be Less Than One Hundred Trillion",
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
  WALLET_TOKEN_ID: "walletTokenId"
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

export const INITIAL_SUPPLY_LARGE_NUMBER_ERROR = 999999999999999;

export const INITIAL_SUPPLY_MAX_LIMIT_NUMBER = 100000000000000;

export const GAS_VALUE = 7920000;

export const NETWORKS = {
    XDC_MAINNET: "XDC Mainnet",
    XDC_APOTHEM_TESTNET: "XDC Apothem Testnet",
};

export const REDIRECT_URL = {
    OBSERVER_TRANSACTION_HASH_URL: "https://observer.xdc.org/transaction-details/",
    OBSERVER_CONTRACT_ADDRESS_URL: "https://observer.xdc.org/token-data/",
    EXPLORER_TRANSACTION_HASH_URL: "https://explorer.apothem.network/txs/",
    EXPLORER_CONTRACT_ADDRESS_URL: "https://explorer.apothem.network/address/",
};


export const faqsList = [
    {
      id: 0,
      questionText:
        "Which chain does Origin support?",
      answerText:
        "XDC Origin supports the creation of XRC tokens and stablecoins on the XDC blockchain network.",
    },
    {
      id: 1,
      questionText:
        "Is XDC Origin free to use?",
      answerText:
        "XDC Origin does not charge any additional service or administrational fees to create new tokens. You only pay the transaction gas fees for the actual generation of the tokens, and these fees will not go to XDC Network but to the respective validators.",
    },
    {
      id: 2,
      questionText:
        "Do I need technical or programming language expertise to create my token?",
      answerText:
        "No. Simply follow the steps in the token generator and create!",
    },
    {
      id: 3,
      questionText:
        "Where can I find my tokens after I mint them?",
      answerText:
        "After you mint and add the tokens, they will reflect in your XDCPay wallet.",
    },
    {
      id: 4,
      questionText:
        "Where can I find the Contract Address of my minted token?",
      answerText:
        "After successfully creating and deploying the token, the confirmation screen will present the hash and contract address.",
    },
    {
      id: 5,
      questionText:
        "Do I need to have XDC to mint tokens?",
      answerText:
        "Yes, you will need XDC in your XDCPay wallet to mint XRC20 tokens on the XDC chain.",
    },
    {
      id: 6,
      questionText:
        "It's my first time. Can I do a test first?",
      answerText:
        "Yes, you can connect your wallet to the Apothem test network if you want to test XRC20 token generation.",
    },
  ];