/* eslint-disable react-hooks/rules-of-hooks */
/*global chrome*/
import React, { useState } from "react";
import styled from "styled-components";
import { Tooltip, Fade, Menu, MenuItem, createTheme } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { makeStyles } from "@material-ui/core/styles";
import millify from "millify";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import { history } from "../../managers/history";
import PauseContractPopup from "./pauseContractPopup";
import BurnContractPopup from "./burnContractPopups";
import ResumeContractPopup from "./resumeContractPopup";
import MintContractPopup from "./mintContractPopup";
import TransferOwnershipPopup from "./transferOwnershipPopup";
import AddToXDCPayPopup from "../createdToken/addToXDCPayPopup";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { validationsMessages, REDIRECT_URL } from "../../constants"

const useStyles = makeStyles((theme) => ({
  menu: {
    width: "178px",
    height: "167px",
    marginLeft: "25px"
  },
  item: {
    color: "#1F1F1F",
    fontSize: "15px",
    fontWeight: 500,
    marginBottom: "3px",
  },
  arrow: {
    "&:before": {
      border: "1px solid #e6e8ed"
    },
    color: theme.palette.common.white,
  },
}));

const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "16px",
        fontweight: 600,
        color: "#4B4B4B",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 3px 12px #0000001A",
        border: "1px solid #e6e8ed",
      },
    }
  }
});

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: auto;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const CommonContainer = styled.div`
  width: 1047px;
  margin: 37px auto 0 auto;
`;
const ColumnContainer = styled.div`
  width: 1047px;
  height: 703px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin: 0 auto 0 auto;
  padding: 16px 29px 44px 35px;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 25px 0;
`;
const BackArrow = styled.img`
  width: 35px;
  height: 24px;
  margin-right: 13.46px;
  cursor: pointer;
`;
const Text = styled.span`
  width: 109px;
  height: 34px;
  text-align: left;
  font: normal normal 600 28px/34px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 110px;
  margin: 0 0 38px 0;
`;
const LeftDiv = styled.div`
  display: flex;
`;
const RightDiv = styled.div`
  //
`;
const ImgContainer = styled.div`
  width: 110px;
  height: 110px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  opacity: 1;
  margin: 0 22px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TokenImg = styled.img`
  width: 70px;
  height: 70px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TokenName = styled.span`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
`;
const TokenSymbol = styled.span`
  text-align: left;
  font: normal normal 600 26px/31px Inter;
  letter-spacing: 0px;
  color: #191919;
  opacity: 1;
`;
const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px 0;
`;
const ContractAddress = styled.span`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
  margin: 0 8px 0 0;
  cursor: pointer;
`;
const CopyIcon = styled.img`
  color: black;
  width: 11px;
  height: 11px;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  &:after {
    color: pink;
  }
`;
const OptionImg = styled.img`
  cursor: pointer;
  /* width: 29px;
  height: 8px; */
`;
const MediaImgContainer = styled.div`
  display: flex;
  align-items: center;
`;
const MediaImgWrapper = styled.div`
  width: 26px;
  height: 26px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MediaImg = styled.img``;
const MiddleContainer = styled.div`
  width: 983px;
  height: 161px;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  display: flex;
  align-items: center;
  padding: 40px 20px 28px 20px;
  margin: 0 0 26px 0;
`;
const DetailsContainerFirst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 230px;
  min-width: 230px;
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 249px;
  min-width: 249px;
`;
const Title = styled.span`
  text-align: center;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
  margin-bottom: 2px;
`;
const Amount = styled.span`
  text-align: center;
  font: normal normal 600 36px/44px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  margin-bottom: 9px;
`;
const Description = styled.span`
  //
`;
const SubDes = styled.span`
  text-align: left;
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #a2a2a2;
`;
const SubContentSupply = styled.span`
  text-align: left;
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
`;
const SubContent = styled.span`
  text-align: center;
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
`;
const Divider = styled.div`
  width: 0px;
  height: 108px;
  border: 1px solid #ffffff;
  opacity: 1;
`;
const BottomContainer = styled.div`
  width: 983px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ActionDiv = styled.div`
  width: 236px;
  height: 308px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BottomImg = styled.img`
  width: 66px;
  height: 66px;
  margin: 33px 0 36.93px 0;
`;
const ActionHeading = styled.span`
  text-align: center;
  font: normal normal 600 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  margin: 0 0 6px 0;
`;
const ActionText = styled.span`
  width: 166px;
  height: 40px;
  text-align: center;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  margin: 0 0 38px 0;
`;
const PauseButton = styled.div`
  width: 96px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #1f1f1f;
  border-radius: 4px;
  opacity: 1;
  cursor: pointer;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PauseButtonDisable = styled.div`
  width: 96px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #1f1f1f;
  border-radius: 4px;
  opacity: 0.6;
  cursor: not-allowed;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ResumeButton = styled.div`
  width: 96px;
  height: 36px;
  background: #1f1f1f 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  border-radius: 4px;
  cursor: pointer;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BurnButton = styled.div`
  width: 96px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ff0000;
  border-radius: 4px;
  opacity: 1;
  cursor: pointer;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BurnButtonDisable = styled.div`
  width: 96px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ff0000;
  border-radius: 4px;
  opacity: 0.6;
  cursor: not-allowed;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MintButton = styled.div`
  width: 96px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #30b52b;
  border-radius: 4px;
  opacity: 1;
  cursor: pointer;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #30b52b;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MintButtonDisable = styled.div`
  width: 96px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #30b52b;
  border-radius: 4px;
  opacity: 0.6;
  cursor: not-allowed;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #30b52b;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TransferButton = styled.div`
  width: 96px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0089ff;
  border-radius: 4px;
  opacity: 1;
  cursor: pointer;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TransferButtonDisable = styled.div`
  width: 96px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0089ff;
  border-radius: 4px;
  opacity: 0.6;
  cursor: not-allowed;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function manageContractDetails(props) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles();
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);

  const addToXDCPayPopup = () => {
    let tokenAddress = props.deolyedTokenDetails?.smartContractAddress.replace(
        /xdc/,
        "0x"
    );
    // console.log("window.ethereum. =-=-=-=-=-=-=", window.ethereum);
    // console.log("tokenSymbol =-=-=-==-=", props.deolyedTokenDetails?.tokenSymbol)
    // console.log("smartContractAddress =-=-=-=-=-=-=-=-=", tokenAddress);
    // console.log("tokenDecimals =-=-=-=-=-=-=-=", props.deolyedTokenDetails?.tokenDecimals)
    window.xdc.sendAsync({
      "jsonrpc": "2.0",
      "method": "metamask_watchAsset",
      "params": {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: props.deolyedTokenDetails?.tokenSymbol,
          decimals: props.deolyedTokenDetails?.tokenDecimals,
          image: 'https://foo.io/token-image.svg',
        },
      },
      "id": 1635861619468
    }, () => {})
    handleClose();
    // setIsAddPopupOpen(!isAddPopupOpen);
  }

  //pause-popups-flow-states :
  const [isPauseOpen, setIsPauseOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [unpause, setUnpause] = useState(false);
  const [changeToResume, setChangeToResume] = useState("");

  const [isBurnOpen, setIsBurnOpen] = useState(false);
  const [isMintOpen, setIsMintOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);

  const togglePausePopup = (closeOpt,confirmPause = false) => {
    let change = props.handleXDCPayWalletChange();
    if(change === false){
      setIsPauseOpen(!isPauseOpen);
      setChangeToResume(closeOpt);
      if (confirmPause) {
        props.getXrc20TokenById(props.state.id);
      }
    } else {
      history.push("/manage-contracts");
      toast.success(validationsMessages.WALLET_DETAILS_UPDATE_MESSAGE, {
        duration: 4000,
        position: "top-center",
        className: "toast-div-address",
      });
    }
  };

  const toggleResumePopup = (opt, confirmResume = false) => {
    if (confirmResume) {
      props.getXrc20TokenById(props.state.id);
    }

    let change = props.handleXDCPayWalletChange();
    if(change === false){
      setIsResumeOpen(!isResumeOpen);
      setUnpause(true);
      switch(opt) {
        case 'pause':
          return setChangeToResume(""), setUnpause(false);
        case "resume":
          return setUnpause(false);
        default:
          return;
      }
    } else {
      history.push("/manage-contracts");
      toast.success(validationsMessages.WALLET_DETAILS_UPDATE_MESSAGE, {
        duration: 4000,
        position: "top-center",
        className: "toast-div-address",
      });
    }
  };

  const toggleBurnPopup = (confirmBurn = false) => {
    if (confirmBurn === true) {
      props.getXrc20TokenById(props.state.id);
    }

    let change = props.handleXDCPayWalletChange();
    if(change === false){
      setIsBurnOpen(!isBurnOpen);
    } else {
      history.push("/manage-contracts");
      toast.success(validationsMessages.WALLET_DETAILS_UPDATE_MESSAGE, {
        duration: 4000,
        position: "top-center",
        className: "toast-div-address",
      });
    }
  };

  const toggleMintPopup = (confirmMint = false) => {
    if (confirmMint === true) {
      props.getXrc20TokenById(props.state.id);
    }

    let change = props.handleXDCPayWalletChange();
    if(change === false){
      setIsMintOpen(!isMintOpen);
    } else {
      history.push("/manage-contracts");
      toast.success(validationsMessages.WALLET_DETAILS_UPDATE_MESSAGE, {
        duration: 4000,
        position: "top-center",
        className: "toast-div-address",
      });
    }
  };

  const toggleTransferPopup = (confirmTransfer = false) => {
    if (confirmTransfer === true) {
      history.push("/manage-contracts")
    }

    let change = props.handleXDCPayWalletChange();
    if(change === false){
      setIsTransferOpen(!isTransferOpen);
    } else {
      history.push("/manage-contracts");
      toast.success(validationsMessages.WALLET_DETAILS_UPDATE_MESSAGE, {
        duration: 4000,
        position: "top-center",
        className: "toast-div-address",
      });
    }
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsActive(!isActive);
  };

  const handleURL = (link, type) => {
    if (type !== undefined && type === "email" && props.deolyedTokenDetails?.email !== "") {
      window.open(`mailto:${""}?subject=Subject&body=Body%20goes%20here`);
    } else if (link !== "") {
      window.open(link, "_blank");
    }
  };

  const handleOptionClick = () => {
    history.push({
      pathname: "/update-profile",
      state: {
        deolyedTokenDetails: props.deolyedTokenDetails,
      },
    });
  };

  const getSafeInteger = (unsafeInteger) => {
    let mini = Math.min(unsafeInteger,Number.MAX_SAFE_INTEGER);
    let maxi = Math.max(mini,Number.MIN_SAFE_INTEGER);
    const safeInt = Math.round(maxi);
    return safeInt;
  }

  const handleRedirect = (contractAddress) => {
     if (props.deolyedTokenDetails?.network === "XDC Mainnet") {
      window.open(`${REDIRECT_URL.OBSERVER_CONTRACT_ADDRESS_URL}${contractAddress}/${props?.deolyedTokenDetails?.tokenSymbol}`, '_blank');
     } else if (props.deolyedTokenDetails?.network === "XDC Apothem Testnet") {
       let newAddress = contractAddress.replace(/0x/, "xdc")
      window.open(`${REDIRECT_URL.EXPLORER_CONTRACT_ADDRESS_URL}${newAddress}`, '_blank');
    }
  };

  const createdTime = moment(props.deolyedTokenDetails?.createdAt).format(
    "h:mm a"
  );
  const createdDate = moment(props.deolyedTokenDetails?.createdAt).format(
    "DD MMMM YYYY"
  );


  return (
    <>
      <Container>
        <div>
          <Toaster />
        </div>
        <CommonContainer>
          <Heading>
            <BackArrow
              onClick={() => history.push("/manage-contracts")}
              src="images/Button_Back_Arrow.svg"
            />
            <Text>Manage</Text>
          </Heading>

          <ColumnContainer>
            <TopContainer>
              <LeftDiv>
                <ImgContainer>
                  <TokenImg src={props.deolyedTokenDetails?.tokenImage} />
                </ImgContainer>
                <InfoContainer>
                  <TokenName>{props.deolyedTokenDetails?.tokenName}</TokenName>
                  <TokenSymbol>
                    {props.deolyedTokenDetails?.tokenSymbol}
                  </TokenSymbol>
                  <AddressContainer>
                    <ContractAddress onClick={() => handleRedirect(props.deolyedTokenDetails?.smartContractAddress)}>
                      {props.deolyedTokenDetails?.smartContractAddress?.replace(
                        /0x/,
                        "xdc"
                      )}
                    </ContractAddress>
                    <Tooltip
                      title={open ? "Copied" : "Copy To Clipboard"}
                      placement="top"
                      arrow
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                    >
                      <CopyToClipboard
                        text={props.deolyedTokenDetails?.smartContractAddress}
                      >
                        <CopyIcon
                          src="/images/Copy.svg"
                          onClick={handleTooltipOpen}
                        />
                      </CopyToClipboard>
                    </Tooltip>
                  </AddressContainer>
                  <MediaImgContainer>
                    <MediaImgWrapper>
                      <MediaImg
                        onClick={() =>
                          handleURL(props.deolyedTokenDetails?.website)
                        }
                        src={props.deolyedTokenDetails?.website === "" ? "/images/Website_Inactive.svg" : "/images/Website_active.svg"}
                        className={props.deolyedTokenDetails?.website === "" ? "imageNotAvailable" : ""}
                      />
                    </MediaImgWrapper>
                    <MediaImgWrapper>
                      <MediaImg
                        onClick={() =>
                          handleURL(props.deolyedTokenDetails?.email, "email")
                        }
                        src={props.deolyedTokenDetails?.email === "" ? "/images/Email_Inactive.svg" : "/images/Email_Active.svg"}
                        className={props.deolyedTokenDetails?.email === "" ? "imageNotAvailable" : ""}
                      />
                    </MediaImgWrapper>
                    <MediaImgWrapper>
                      <MediaImg
                        onClick={() => handleURL("")}
                        src={props.deolyedTokenDetails?.facebook === "" ? "/images/Facebook_Inactive.svg" : "/images/Facebook_Active.svg"}
                        className={props.deolyedTokenDetails?.facebook === "" ? "imageNotAvailable" : ""}
                      />
                    </MediaImgWrapper>
                    <MediaImgWrapper>
                      <MediaImg
                        onClick={() =>
                          handleURL(props.deolyedTokenDetails?.twitter)
                        }
                        src={props.deolyedTokenDetails?.twitter === "" ? "/images/Twitter_Inactive.svg" : "/images/Twitter_Active.svg"}
                        className={props.deolyedTokenDetails?.twitter === "" ? "imageNotAvailable" : ""}
                      />
                    </MediaImgWrapper>
                    <MediaImgWrapper>
                      <MediaImg
                        onClick={() =>
                          handleURL(props.deolyedTokenDetails?.telegram)
                        }
                        src={props.deolyedTokenDetails?.telegram === "" ? "/images/Telegram_Inactive.svg" : "/images/Telegram_Active.svg"}
                        className={props.deolyedTokenDetails?.telegram === "" ? "imageNotAvailable" : ""}
                      />
                    </MediaImgWrapper>
                    <MediaImgWrapper>
                      <MediaImg
                        onClick={() =>
                          handleURL(props.deolyedTokenDetails?.linkedIn)
                        }
                        src={props.deolyedTokenDetails?.linkedIn === "" ? "/images/LInkedIn_Inactive.svg" : "/images/LinkedIn_Active.svg"}
                        className={props.deolyedTokenDetails?.linkedIn === "" ? "imageNotAvailable" : ""}
                      />
                    </MediaImgWrapper>
                    <MediaImgWrapper>
                      <MediaImg
                        onClick={() =>
                          handleURL(props.deolyedTokenDetails?.reddit)
                        }
                        src={props.deolyedTokenDetails?.reddit === "" ? "/images/Reditt_Inactive.svg" : "/images/Reditt_Active.svg"}
                        className={props.deolyedTokenDetails?.reddit === "" ? "imageNotAvailable" : ""}
                      />
                    </MediaImgWrapper>
                    <MediaImgWrapper>
                      <MediaImg
                        onClick={() =>
                          handleURL(props.deolyedTokenDetails?.coinGecko)
                        }
                        src={props.deolyedTokenDetails?.coinGecko === "" ? "/images/CoinGecko_Inactive.svg" : "/images/CoinDecko_Active.svg"}
                        className={props.deolyedTokenDetails?.coinGecko === "" ? "imageNotAvailable" : ""}
                      />
                    </MediaImgWrapper>
                  </MediaImgContainer>
                </InfoContainer>
              </LeftDiv>
              <RightDiv>
                {isActive ? (
                  <OptionImg
                  src="/images/Options_Active.svg"
                  onClick={handleMenuOpen}
                />
                ) : (
                  <OptionImg
                  src="/images/Options_Inactive.svg"
                  onClick={handleMenuOpen}
                />
                )}
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  getContentAnchorEl={null}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  classes={{
                    paper: classes.menu,
                  }}
                >
                  <MenuItem className={classes.item} onClick={() => handleRedirect(props.deolyedTokenDetails?.smartContractAddress)}>View on Explorer</MenuItem>
                  <MenuItem className={classes.item} onClick={addToXDCPayPopup}>Add to XDCPay</MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={() => handleOptionClick()}
                  >
                    Edit Contract Profile
                  </MenuItem>
                  <MenuItem className={classes.item} onClick={() => props.downloadSolFile()}>
                    Download .Sol File
                  </MenuItem>
                </Menu>
              </RightDiv>
            </TopContainer>

            <MiddleContainer>
              <DetailsContainerFirst>
                <Title>Initial Supply</Title>
                <MuiThemeProvider theme={theme}>
                  <Tooltip
                    classes={{ arrow: classes.arrow }}
                    title={Number(props.deolyedTokenDetails?.tokenInitialSupply).toLocaleString()}
                    placement="top"
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <Amount>
                      {millify(props.deolyedTokenDetails?.tokenInitialSupply)}
                    </Amount>
                  </Tooltip>
                </MuiThemeProvider>
                <Description>
                  <SubDes>Created on:</SubDes>{" "}
                  <SubContentSupply>
                    {createdTime.toUpperCase()}, {createdDate}
                  </SubContentSupply>
                </Description>
              </DetailsContainerFirst>
              <Divider />
              <DetailsContainer>
                <Title>Minted Tokens</Title>
                <MuiThemeProvider theme={theme}>
                  <Tooltip
                    classes={{ arrow: classes.arrow }}
                    title={Number(props.deolyedTokenDetails?.mintedTokens).toLocaleString()}
                    placement="top"
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <Amount>
                      {/*{millify(props.deolyedTokenDetails?.mintedTokens)}*/}
                      {millify(getSafeInteger(props.deolyedTokenDetails?.mintedTokens))}
                    </Amount>
                  </Tooltip>
                </MuiThemeProvider>
                <Description>
                  <SubDes>Last minted:</SubDes>{" "}
                  <SubContent>
                    {" "}
                    {props.deolyedTokenDetails?.lastMinted !== null
                      ? moment(props.deolyedTokenDetails?.lastMinted).fromNow()
                      : "NA"}
                  </SubContent>
                </Description>
              </DetailsContainer>
              <Divider />
              <DetailsContainer>
                <Title>Burnt Tokens</Title>
                <MuiThemeProvider theme={theme}>
                  <Tooltip
                    classes={{ arrow: classes.arrow }}
                    title={Number(props.deolyedTokenDetails?.burntTokens).toLocaleString()}
                    placement="top"
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <Amount>
                      {/*{millify(props.deolyedTokenDetails?.burntTokens)}*/}
                      {millify(getSafeInteger(props.deolyedTokenDetails?.burntTokens))}
                    </Amount>
                  </Tooltip>
                </MuiThemeProvider>
                <Description>
                  <SubDes>Last burnt:</SubDes>{" "}
                  <SubContent>
                    {props.deolyedTokenDetails?.lastBurnt !== null
                      ? moment(props.deolyedTokenDetails?.lastBurnt).fromNow()
                      : "NA"}
                  </SubContent>
                </Description>
              </DetailsContainer>
              <Divider />
              <DetailsContainer>
                <Title>Current Supply</Title>
                <MuiThemeProvider theme={theme}>
                  <Tooltip
                    classes={{ arrow: classes.arrow }}
                    title={Number(props.deolyedTokenDetails?.tokenCurrentSupply).toLocaleString()}
                    placement="top"
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <Amount>
                      {/*{millify(1000001000100010)}*/}
                      {millify(getSafeInteger(props.deolyedTokenDetails?.tokenCurrentSupply))}
                    </Amount>
                  </Tooltip>
                </MuiThemeProvider>
                <Description>
                  <SubDes>Updated:</SubDes>{" "}
                  <SubContent>
                    {moment(props.deolyedTokenDetails?.updatedAt).fromNow()}
                  </SubContent>
                </Description>
              </DetailsContainer>
            </MiddleContainer>

            <BottomContainer>
              {changeToResume !== "change" &&
              props.deolyedTokenDetails?.isPaused !== true ? (
                <ActionDiv>
                  <BottomImg src="/images/Pause_Contract.png" />

                  <ActionHeading>Pause Contract</ActionHeading>
                  <ActionText>
                    Pause all transactions on this Contract
                  </ActionText>
                    {props.deolyedTokenDetails?.pausable ? (
                      <PauseButton onClick={togglePausePopup}>Pause</PauseButton>
                    ) : (
                      <PauseButtonDisable disabled>Pause</PauseButtonDisable>
                    )}
                </ActionDiv>
              ) : (
                <ActionDiv>
                  <BottomImg src="/images/Pause_Contract.png" />

                  <ActionHeading>Resume Contract</ActionHeading>
                  <ActionText>
                    Resume Contract to allow transactions
                  </ActionText>
                  {unpause !== true ? (
                    <ResumeButton onClick={toggleResumePopup}>
                      Resume
                    </ResumeButton>
                  ) : (
                    <ResumeButton>Resume</ResumeButton>
                  )}
                </ActionDiv>
              )}

              <ActionDiv>
                <BottomImg src="/images/Mint_Contract.svg" />
                <ActionHeading>Mint Tokens</ActionHeading>
                <ActionText>Add tokens to increase the supply</ActionText>
                {props.deolyedTokenDetails?.isPaused !== true ? (
                  props.deolyedTokenDetails?.mintable ? (
                  <MintButton disabled={false} onClick={toggleMintPopup}>
                    Mint
                  </MintButton>
                  ) : (
                  <MintButtonDisable disabled>
                    Mint
                  </MintButtonDisable>
                  )
                ) : (
                  <MintButtonDisable disabled={true}>Mint</MintButtonDisable>
                )}
              </ActionDiv>

              <ActionDiv>
                <BottomImg src="/images/Burn_Contract.svg" />
                <ActionHeading>Burn Tokens</ActionHeading>
                <ActionText>Burn tokens to reduce the supply</ActionText>
                {props.deolyedTokenDetails?.isPaused !== true ? (
                  props.deolyedTokenDetails?.burnable ? (
                  <BurnButton disabled={false} onClick={toggleBurnPopup}>
                    Burn
                  </BurnButton>
                  ) : (
                  <BurnButtonDisable disabled>
                    Burn
                  </BurnButtonDisable>
                  )
                ) : (
                  <BurnButtonDisable disabled>Burn</BurnButtonDisable>
                )}
              </ActionDiv>

              <ActionDiv>
                <BottomImg src="/images/Transfer_Contract.svg" />
                <ActionHeading>Transfer Contract</ActionHeading>
                <ActionText>Transfer ownership of the Contract</ActionText>
                {props.deolyedTokenDetails?.isPaused !== true ? (
                  <TransferButton
                    disabled={false}
                    onClick={toggleTransferPopup}
                  >
                    Transfer
                  </TransferButton>
                ) : (
                  <TransferButtonDisable disabled>Transfer</TransferButtonDisable>
                )}
              </ActionDiv>
            </BottomContainer>
          </ColumnContainer>
        </CommonContainer>
      </Container>
      {isAddPopupOpen && (
        <AddToXDCPayPopup
          isOpen={isAddPopupOpen}
          handleClose={addToXDCPayPopup}
        />
      )}
      {isPauseOpen && (
        <PauseContractPopup
          isOpen={isPauseOpen}
          handleClose={togglePausePopup}
          deployedContract={props.deolyedTokenDetails}
          tokenName={props.deolyedTokenDetails?.tokenName}
        />
      )}
      {isResumeOpen && (
        <ResumeContractPopup
          isOpen={isResumeOpen}
          handleClose={toggleResumePopup}
          deployedContract={props.deolyedTokenDetails}
          tokenName={props.deolyedTokenDetails?.tokenName}
        />
      )}
      {isBurnOpen && (
        <BurnContractPopup
          isOpen={isBurnOpen}
          handleClose={toggleBurnPopup}
          deployedContract={props.deolyedTokenDetails}
          tokenInitialSupply={props.deolyedTokenDetails?.tokenInitialSupply}
        />
      )}
      {isMintOpen && (
        <MintContractPopup
          isOpen={isMintOpen}
          handleClose={toggleMintPopup}
          deployedContract={props.deolyedTokenDetails}
        />
      )}
      {isTransferOpen && (
        <TransferOwnershipPopup
          isOpen={isTransferOpen}
          handleClose={toggleTransferPopup}
          deployedContract={props.deolyedTokenDetails}
          tokenName={props.deolyedTokenDetails?.tokenName}
        />
      )}
    </>
  );
}

export default manageContractDetails;
