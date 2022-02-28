import React, { useState } from "react";
import styled from "styled-components";
import ChangeNetworkPopup from "../changeNetworkPopup/changeNetworkDesktop";
import UploadFile from "../uploadTokenImage/uploadImage";
import UploadTokenImage from "../uploadTokenImage/uploadImageMobile";
import { useHistory } from "react-router";
import { Tooltip, createTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  validationsMessages,
  toolTipContentMessages,
  NETWORKS
} from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Web3 from "web3";
import { updateAccountDetails } from "../../action";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: 898px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 720px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    width: 355px;
  }
`;

const Column = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  margin: 0px 0px 67px 0px;
`;

const RowTwo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px 0px 57px;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 30px 0px 0px 17px;
  }
`;
const CommonRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px 0px 0px 57px;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 6px 0px 0px 18px;
  }
`;

const DesktopCommonRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 57px;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 30px 0px 0px 18px;
  }
`;

const MobCommonRow = styled.div`
  display: none;
  @media (min-width: 0px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 30px 0px 0px 18px;
  }
`;

const LastRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 57px 30px 0px;
  @media (min-width: 0px) and (max-width: 767px) {
    padding: 20px 18px 30px 0px;
  }
`;

const SpanOne = styled.div`
  text-align: left;
  font: normal normal 600 20px/24px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    font: normal normal 600 18px/21px Inter;
  }
`;
const SpanTwo = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  padding-bottom: 43px;
  @media (min-width: 0px) and (max-width: 767px) {
    font: normal normal normal 14px/17px Inter;
    padding: 10px 0px 0px 0px;
  }
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #303134;
  opacity: 1;
  padding: 7px 0px 7px 0px;
`;
const InputDiv = styled.input`
  width: 783px;
  height: 40px;
  border: none;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  padding: 7px 0px 7px 16px;
  position: relative;
  top: 0;
  left: 0;
  ::placeholder {
    padding: 0px 0px 0px 7px;
    /* text-align: left; */
    font: normal normal medium 14px/17px Inter;
    letter-spacing: 0px;
    color: #a8acc1;
    opacity: 1;
  }
  :focus {
    outline: 2px solid #8ca6f0;
  }
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 686px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 322px;
  }
`;
const BlurTextDiv = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #a2a2a2;
  opacity: 1;
  padding: 7px 0px 7px 0px;
`;

const InsideDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  left: 0;
`;

const CircleRow = styled.div`
  position: relative;
  top: 0;
  left: 0;
  padding-bottom: 35px;
`;

const PopButton = styled.button`
  position: absolute;
  top: 5px;
  right: 62px;
  border: none;
  background: transparent;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;

  @media (min-width: 0px) and (max-width: 767px) {
    /* right: 16px; */
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    right: 27px;
  }
`;

const MobPopupBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 16px;
  border: none;
  background: transparent;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
  @media (min-width: 768px) {
    display: none;
  }
`;

const PlusImage = styled.img`
  position: absolute;
  top: 52px;
  left: 54px;
  width: 21px;
  height: 21px;
  cursor: pointer;
  text-align: left;
  font: normal normal normal 44px/54px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
`;

const ContinueButton = styled.button`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border: none;
  @media (min-width: 0px) and (max-width: 767px) {
    justify-content: center;
    width: 322px;
    height: 42px;
    margin-top: 12px;
  }
`;

const ImgDiv = styled.img`
  width: 15px;
  height: 13px;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

const ContinueText = styled.div`
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;
const MainCircle = styled.div`
  /* width: 128px; */
  /* overflow: hidden; */
  /* height: 128px; */
  /* background: #f0f2fc 0% 0% no-repeat padding-box;
  border: 1px dashed #8ca6f0; */
  /* border-radius: 124px; */
  opacity: 1;
  position: relative;
  top: 0;
  left: 0;
  margin-top: 17px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.div`
  color: red;
`;

const ReplaceButton = styled.button`
  padding: 5px 0px 0px 30px;
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  background: transparent;
  opacity: 1;
  border: none;
`;
const CustomReplaceButton = styled.button`
  padding: 5px 0px 0px 0px;
  text-align: left;
  font: normal normal medium 14px/17px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  background: transparent;
  opacity: 1;
  border: none;
`;

const MainImage = styled.img`
  width: 128px;
  height: 128px;
  /* border-radius: 50%; */
  /* position: absolute;
  top: 0px; */
`;

const UrlInput = styled.img`
  opacity: 1;
`;

const QImg = styled.img`
  padding-left: 10px;
`;

const BottomContainer = styled.div`
  width: 783px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 686px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 322px;
  }
`;

const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "16px",
        color: "#4B4B4B",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 3px 12px #0000001A",
        border: "1px solid #e6e8ed",
        padding: "10px"
      },
    },
  },
});

const defaultTheme = createTheme();

const useStyles = makeStyles((theme) => ({
  arrow: {
    "&:before": {
      border: "1px solid #e6e8ed",
    },
    color: theme.palette.common.white,
  },
  textareaAutosize: {
    width: "783px",
    border: "none",
    background: "#f0f2fc 0% 0% no-repeat padding-box",
    borderRadius: "4px",
    opacity: 1,
    padding: "7px 16px 7px 16px",
    position: "relative",
    top: 0,
    left: 0,
    resize: "none",
    "::placeholder": {
      padding: "0px 0px 0px 7px",
      font: "normal normal medium 14px/17px Inter",
      letterSpacing: "0px",
      color: "#a8acc1",
      opacity: 1,
    },
    "&:focus": {
      outline: "3px solid #8ca6f0",
    },
    "::-webkit-inner-spin-button":{
      "-webkit-appearance": "none",
      margin: 0,
    } ,
    "::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "@media (min-width: 768px) and (max-width: 1024px)": {
      width: "686px",
    },
    "@media (min-width: 0px) and (max-width: 767px)": {
      width: "322px",
    }
  }
}));

function Token(props) {
  const classes = useStyles();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [symbolsArr] = useState(["e", "E", "+", "-", "."]);

  // let hasTokenId = "id" in props?.tokenData;

  // let imgData = hasTokenId === false ? props?.imgData : props.tokenData?.tokenImage;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const formErrorMessage = () =>
    toast.error(validationsMessages.FORM_FIELD_ERROR, {
      duration: 4000,
      position: validationsMessages.TOASTS_POSITION,
      className: "toast-div-address",
    });
  // const descriptionErrorMessage = () =>
  //   toast.error(validationsMessages.VALIDATE_DESCRIPTION_FIELD, {
  //     duration: 4000,
  //     position: validationsMessages.TOASTS_POSITION,
  //     className: "toast-div-address",
  //   });
  // const symbolErrorMessage = () =>
  //   toast.error(validationsMessages.VALIDATE_TOKEN_SYMBOL_FIELD, {
  //     duration: 4000,
  //     position: validationsMessages.TOASTS_POSITION,
  //     className: "toast-div-address",
  //   });
  // const nameErrorMessage = () =>
  //   toast.error(validationsMessages.VALIDATE_TOKEN_NAME_FIELD, {
  //     duration: 4000,
  //     position: validationsMessages.TOASTS_POSITION,
  //     className: "toast-div-address",
  //   });
  // const decimalErrorMessage = () =>
  //   toast.error(validationsMessages.VALIDATE_DECIMAL_FIELD, {
  //     duration: 4000,
  //     position: validationsMessages.TOASTS_POSITION,
  //     className: "toast-div-address",
  //   });
  // const imageErrorMessage = () =>
  //   toast.error(validationsMessages.VALIDATE_IMAGE_FIELD, {
  //     duration: 4000,
  //     position: validationsMessages.TOASTS_POSITION,
  //     className: "toast-div-address",
  //   });

  const saveAndContinue = (e) => {
    handleXDCPayWalletChange();
    if (props.tokenData?.tokenName?.length === 0 && props.tokenData?.tokenSymbol?.length === 0  && props.tokenData?.tokenDescription?.length === 0) {
      formErrorMessage();
    }
    else if (props.tokenData?.tokenName?.length === 0 || props.tokenData?.tokenName?.match(/^\s*$/)) {
      props.handleChange({
        target:{
          name: "tokenName",
          value: ""
        }
      });
      return;
    } else if (props.tokenData?.tokenSymbol?.length === 0 || props.tokenData?.tokenSymbol?.match(/^\s*$/)) {
      props.handleChange({
        target:{
          name: "tokenSymbol",
          value: ""
        }
      });
      return;
    } else if (props.tokenData?.tokenDecimals?.length === 0) {
      return;
    } else if (props.tokenData?.tokenDescription?.length === 0 || props.tokenData?.tokenDescription?.match(/^\s*$/)) {
      props.handleChange({
        target:{
          name: "tokenDescription",
          value: ""
        }
      });
      return;
    }
    if (
      props.tokenData.tokenDecimals >= 8 &&
      props.tokenData.tokenDecimals <= 18 &&
      props.tokenData.tokenDecimals !== undefined &&
      props.tokenData?.tokenDescription !== undefined &&
      props.tokenData?.tokenDescription !== "" &&
      props.tokenData?.tokenDescription?.length <= 500 &&
      props.tokenData?.tokenSymbol !== undefined &&
      props.tokenData?.tokenSymbol !== "" &&
      props.tokenData?.tokenSymbol?.length <= 15 &&
      props.tokenData?.tokenName !== undefined &&
      props.tokenData?.tokenName !== "" &&
      props.tokenData?.tokenName?.length <= 30 &&
      !props.tokenData?.tokenDescription.match(/^\s*$/) &&
      !props.tokenData?.tokenSymbol.match(/^\s*$/) &&
      !props.tokenData?.tokenName.match(/^\s*$/)
    ) {
      props.handleChange(e);
      props.nextStep(e);
    }
  };

  const handleXDCPayWalletChange = async () => {
    // window.web3 = new Web3(window.ethereum);
    window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);
    if (
      window.web3.currentProvider &&
      props?.userDetails?.accountDetails?.isLoggedIn
    ) {
      if (!window.web3.currentProvider.chainId) {
        //when metamask is disabled
        const state = window.web3.givenProvider.publicConfigStore ? window.web3.givenProvider.publicConfigStore._state : window.web3.currentProvider.publicConfigStore._state;
        if (state.selectedAddress !== undefined) {
          let address = state.selectedAddress;
          let network =
            state.networkVersion === "50"
              ? NETWORKS.XDC_MAINNET
              : NETWORKS.XDC_APOTHEM_TESTNET;

          if ((address || network) && (address !== props?.userDetails?.accountDetails?.address || network !== props?.userDetails?.accountDetails?.network)) {
            let balance = null;

            await window.web3.eth.getBalance(address).then((res) => {
              balance = res / Math.pow(10, 18);
              balance = truncateToDecimals(balance);
            });

            let accountDetails = {
              address: address,
              network: network,
              balance: balance,
              isLoggedIn: true,
            };

            props.updateAccountDetails(accountDetails);
          }
        } else {
          //metamask is also enabled with xdcpay
        }
      }
    }
  };

  const truncateToDecimals = (num, dec = 2) => {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Parent>
        <Column>
          <RowTwo>
            <SpanOne>Basic Token Info</SpanOne>
            <SpanTwo>
              Tell us basic information about the token that you are building
            </SpanTwo>
          </RowTwo>

          <CommonRow>
            <TextDiv>
              Network<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_NETWORK_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InsideDiv>
              <InputDiv
                type="text"
                name="network"
                readOnly
                value={props.userDetails?.accountDetails?.network}
                placeholder="XDC Mainnet"
              />
              <PopButton onClick={togglePopup}>Change Network</PopButton>
              {isOpen && <ChangeNetworkPopup handleClose={togglePopup} />}
              <MobPopupBtn onClick={() => history.push("/change-network")}>
                Change Network
              </MobPopupBtn>
            </InsideDiv>

            <BlurTextDiv>Current XDCPay network connected</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>
              Token Name<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_NAME_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>

            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="tokenName"
              value={props.tokenData.tokenName}
              placeholder="e.g. XDC Network"
            />
            <BlurTextDiv>Choose a name for your token</BlurTextDiv>
            {props.isVisited === "tokenName" && props.tokenData?.tokenName === "" ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_TOKEN_NAME_FIELD}
              </p>
            ) : props.tokenData?.tokenName?.length > 30 ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_TOKEN_NAME_LIMIT}
              </p>
            ) : (
              props.isVisited === "tokenName" && (props.tokenData?.tokenName?.length === undefined || props.tokenData?.tokenName.match(/^\s*$/)) ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_TOKEN_NAME_FIELD}
              </p>
              ) : ""
            )}
          </CommonRow>

          <CommonRow>
            <TextDiv>
              Symbol<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_SYMBOL_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="tokenSymbol"
              value={props.tokenData.tokenSymbol}
              placeholder="e.g. XDC"
            />

            <BlurTextDiv>Choose symbol for your token</BlurTextDiv>
            {props.isVisited === "tokenSymbol" && props.tokenData?.tokenSymbol === "" ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_TOKEN_SYMBOL_FIELD}
              </p>
            ) : props.tokenData?.tokenSymbol?.length > 15 ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_TOKEN_SYMBOL_LIMIT}
              </p>
            ) : (
              props.isVisited === "tokenSymbol" && (props.tokenData?.tokenSymbol?.length === undefined || props.tokenData?.tokenSymbol.match(/^\s*$/)) ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_TOKEN_SYMBOL_FIELD}
              </p>
              ) : ""
            )}
          </CommonRow>

          <DesktopCommonRow>
            <TextDiv>
            Token Image (PNG, 256*256 px)<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_IMAGE_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>

            {/* condition work, when user comes to create token and have uploaded the image*/}
            {props.imgData && props.imgData.length !== undefined ? (
              <CircleRow>
                <Div>
                  <MainImage src={props.imgData} />
                  <UrlInput
                    value={props.tokenData.tokenImage}
                    readOnly
                    type="text"
                    name="tokenImage"
                  />
                  <ReplaceButton
                    onClick={(e) => {
                      props.toggleUploadPopup(e);
                      props.handleChange(e);
                    }}
                  >
                    Replace
                  </ReplaceButton>
                  {props.isUploadOpen && (
                    <UploadFile
                      handleUploadClose={(e) => props.toggleUploadPopup(e)}
                    />
                  )}
                </Div>
              </CircleRow>
            ) : (
              <CircleRow>
                {/* checking condition, whether user has came to edit token or creation of token,
                    1st cond. will work for edit and 2nd for first time creation by default*/}

                {props.tokenData.tokenImage ? (
                  <Div>
                    <MainImage src={props.tokenData.tokenImage} />
                    <UrlInput
                      value={props.tokenData.tokenImage}
                      readOnly
                      type="text"
                      name="tokenImage"
                    />
                    <CustomReplaceButton onClick={(e) => props.toggleUploadPopup(e)}>
                    Use Custom Image
                    </CustomReplaceButton>
                    {props.isUploadOpen && (
                      <UploadFile
                        handleUploadClose={(e) => props.toggleUploadPopup(e)}
                      />
                    )}
                  </Div>
                ) : (
                  <div>
                    <MainCircle>
                      {/* <PlusImage
                        onClick={(e) => props.toggleUploadPopup(e)}
                        src="/images/PlusIcon.svg"
                      /> */}
                      <img src="/images/default_xrc20_img.svg" alt="" />
                      <UrlInput
                        value={props.tokenData.tokenImage}
                        readOnly
                        type="text"
                        name="tokenImage"
                      />
                      {props.isUploadOpen && (
                        <UploadFile
                          handleUploadClose={(e) => props.toggleUploadPopup(e)}
                        />
                      )}
                      </MainCircle>
                    <CustomReplaceButton onClick={(e) => props.toggleUploadPopup(e)}>
                      Use Custom Image
                    </CustomReplaceButton>

                    {props.isVisited === "tokenImage" && props.tokenData?.tokenImage === "" ? (
                      <p className="shown-error">
                        Token Image/Icon is required
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </CircleRow>
            )}
          </DesktopCommonRow>

          {/* --------- */}

          <MobCommonRow>
            <TextDiv>
              Token Image (PNG, 256*256 px)<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_IMAGE_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>

            {props.imgData && props.imgData.length !== undefined ? (
              <CircleRow>
                {props.isUploadOpen && (
                  <UploadTokenImage
                    handleUploadClose={(e) => props.toggleUploadPopup(e)}
                  />
                )}
                <Div>
                  <MainImage src={props.imgData} />
                  <UrlInput
                    value={props.tokenData.tokenImage}
                    readOnly
                    type="text"
                    name="tokenImage"
                  />
                  <ReplaceButton
                    onClick={(e) => {
                      props.toggleUploadPopup(e);
                      props.handleChange(e);
                    }}
                  >
                    Replace
                  </ReplaceButton>
                </Div>
              </CircleRow>
            ) : (
              <CircleRow>
                {/* checking condition, whether user has came to edit token or creation of token,
                    1st cond. will work for edit and 2nd for first time creation by default*/}
                {props.tokenData.tokenImage ? (
                  <Div>
                    {props.isUploadOpen && (
                      <UploadTokenImage
                        handleUploadClose={(e) => props.toggleUploadPopup(e)}
                      />
                    )}
                    <MainImage src={props.tokenData.tokenImage} />
                    <UrlInput
                      value={props.tokenData.tokenImage}
                      readOnly
                      type="text"
                      name="tokenImage"
                    />
                    <ReplaceButton onClick={(e) => props.toggleUploadPopup(e)}>
                      Replace
                    </ReplaceButton>
                  </Div>
                ) : (
                  <div>
                    {props.isUploadOpen && (
                      <UploadTokenImage
                        handleUploadClose={(e) => props.toggleUploadPopup(e)}
                      />
                    )}
                    <MainCircle>
                      <UrlInput
                        value={props.tokenData.tokenImage}
                        readOnly
                        type="text"
                        name="tokenImage"
                      />
                      <PlusImage
                        onClick={(e) => props.toggleUploadPopup(e)}
                        src="/images/PlusIcon.svg"
                      />
                    </MainCircle>
                    {props.tokenData?.tokenImage === "" ? (
                      <p className="shown-error">
                        Token Image/Icon is required
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </CircleRow>
            )}
          </MobCommonRow>

          <CommonRow>
            <TextDiv>
              Decimals<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_DECIMAL_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv
              type="number"
              onChange={(e) => props.handleChange(e)}
              name="tokenDecimals"
              value={props.tokenData?.tokenDecimals}
              placeholder="8-18"
              onKeyDown={e => symbolsArr.includes(e.key) && e.preventDefault()}
            />

            <BlurTextDiv>
              Insert the decimal precision of your token
            </BlurTextDiv>
            {props.tokenData?.tokenDecimals < 8 ||
              props.tokenData?.tokenDecimals > 18 ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_DECIMAL_RANGE}
              </p>
            ) : (
              ""
            )}
          </CommonRow>

          <CommonRow>
            <TextDiv>
              Description<Span>&nbsp;*</Span>
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_DESCRIPTION_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <TextareaAutosize
              className={classes.textareaAutosize}
              aria-label="minimum height"
              minRows={1.1}
              type="text"
              onChange={(e) => props.handleChange(e)}
              onInput={(e) => (e.target.value = e.target.value.slice(0, 501))}
              name="tokenDescription"
              value={props.tokenData.tokenDescription}
              placeholder="A Dao Token"
            />

            <BottomContainer>
              <BlurTextDiv>Add description for your token</BlurTextDiv>
              <BlurTextDiv>{props.tokenData?.tokenDescription?.length}/500</BlurTextDiv>
            </BottomContainer>
            {props.isVisited === "tokenDescription" && props.tokenData?.tokenDescription === "" ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_DESCRIPTION_FIELD}
              </p>
            ) : props.tokenData?.tokenDescription?.length > 500 ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_DESCRIPTION_LIMIT}
              </p>
            ) : (
              props.isVisited === "tokenDescription" && (props.tokenData?.tokenDescription?.length === undefined || props.tokenData?.tokenDescription.match(/^\s*$/)) ? (
              <p className="shown-error">
                {validationsMessages.VALIDATE_DESCRIPTION_FIELD}
              </p>
              ) : ""
            )}
          </CommonRow>

          <CommonRow>
            <TextDiv>
              Website (Optional)
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_WEBSITE_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="website"
              value={props.tokenData.website}
              placeholder="Website Address"
            />
            <BlurTextDiv>Add Website url for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>
              Twitter (Optional)
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_TWITTER_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="twitter"
              value={props.tokenData.twitter}
              placeholder="e.g. Twitter Url"
            />
            <BlurTextDiv>Add Twitter page url for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>
              Telegram (Optional)
              <MuiThemeProvider theme={theme}>
                <Tooltip
                  title={toolTipContentMessages.TOKEN_TELEGRAM_CONTENT}
                  placement="right-end"
                  arrow
                  classes={{ arrow: classes.arrow }}
                >
                  <QImg src="/images/Info.svg"></QImg>
                </Tooltip>
              </MuiThemeProvider>
            </TextDiv>
            <InputDiv
              type="text"
              onChange={(e) => props.handleChange(e)}
              name="telegram"
              value={props.tokenData.telegram}
              placeholder="e.g. Telegram Url"
            />
            <BlurTextDiv>Add Telegram group url for your token</BlurTextDiv>
          </CommonRow>

          <LastRow>
            <ContinueButton disabled={false} onClick={saveAndContinue}>
              <ContinueText>Continue</ContinueText>
              <ImgDiv src="/images/Button_Next_Arrow.svg" />
            </ContinueButton>
          </LastRow>
        </Column>
      </Parent>
    </>
  );
}

const mapStateToProps = (state) => ({
  userDetails: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  updateAccountDetails: (accountDetails) => {
    dispatch(updateAccountDetails(accountDetails));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(Token);
