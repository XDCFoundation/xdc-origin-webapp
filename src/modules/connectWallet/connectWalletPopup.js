/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { handleAccountDetails, handleWallet } from "../../action";
import Web3 from "web3";
import { validationsMessages } from "../../constants";
import { detect } from "detect-browser";
import toast, { Toaster } from "react-hot-toast";
import { XDCPay_EXTENSION_URL, NETWORKS } from "../../constants"

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 50,
    left: 620,
    width: "679px",
    maxWidth: "100%",
    "@media screen and (max-width: 1660px) and (min-width: 1440px) ": {
      left: 427,
    },
    "@media screen and (max-width: 1440px) and (min-width: 1280px) ": {
      left: 287,
    },
    "@media screen and (min-width: 425px) and (max-width: 768px)": {
      top: 63,
      left: 11,
    },
    "@media screen and (min-width: 820px) and (max-width: 1024px)": {
      left: 40,
    },
  },
  versionDialog: {
    position: "absolute",
    top: 50,
    left: "40vw",
    width: "405px",
    maxWidth: "100%",
    "@media screen and (min-width: 425px) and (max-width: 768px)": {
      top: 63,
      left: "20vw",
    },
    "@media screen and (min-width: 820px) and (max-width: 1024px)": {
      left: "30vw",
    },
  },
});

const Container = styled.div`
  width: 679px;
  min-width: 679px;
  height: 489px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: "355px";
    min-width: 355px;
    height: 735px;
  }
`;
const VersionContainer = styled.div`
  width: 405px;
  max-width: 100%;
  height: 205px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: "355px";
    min-width: 355px;
    height: 735px;
  }
`;
const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 19px 0 0 23px;
`;
const SubHeadingText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0 0 0;
  text-align: center;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
`;
const DialogTitle = styled.div`
  width: 148px;
  height: 24px;
  text-align: left;
  font: normal normal 600 20px/24px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
`;
const CrossIcon = styled.img`
  margin: 0 22.69px 0 0;
  width: 20px;
  height: 20px;
  background: 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
`;
const Line = styled.hr`
  margin: 15px 0 44px 0;
  width: 679px;
  height: 2px;
  color: #d8d8d8;
`;
const VersionPopupLine = styled.hr`
  margin: 15px 0 44px 0;
  width: 405px;
  height: 2px;
  color: #d8d8d8;
`;
const BoxContainer = styled.div`
  width: 626px;
  height: 233px;
  margin: 0 23px 41px 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 200px;
  height: 233px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  opacity: 1;
  &:hover {
    border: 1px solid #c2c2c2;
  }
`;
const TitleContainer = styled.div`
  width: 200px;
  max-width: 200px;
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;
const Title = styled.span`
  width: 42px;
  height: 17px;
  text-align: center;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #7b7979;
  opacity: 1;
`;
const ImgContainer = styled.div`
  width: 200px;
  max-width: 200px;
  margin: 26px 0 28px 0;
  display: flex;
  justify-content: center;
`;
const MainText = styled.span`
  width: 200px;
  max-width: 200px;
  text-align: center;
  font: normal normal 600 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
`;
const SubTextContainer = styled.div`
  width: 200px;
  max-width: 200px;
  display: flex;
  justify-content: center;
`;
const SubText = styled.span`
  width: 166px;
  height: 60px;
  text-align: center;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
`;
const Link = styled.a`
  color: #3163f0;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
const Img = styled.img`
  width: 43px;
  height: 43px;
`;
const ButtonContainer = styled.div`
  width: 679px;
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  width: 264px;
  height: 50px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const BtnImg = styled.img`
  margin-right: 9px;
`;
const BtnText = styled.span`
  width: 130px;
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  font-size: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const VersionPopupText = styled.div`
  max-width: 298px;
  font-size: 16px;
  color: #4B4B4B;
  letter-spacing: 0px;
  font: normal normal normal 16px/20px Inter;
  text-align: center;
`;
const VersionPopupTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const VersionNumberText = styled.span`
  color: #3163F0;
`;

function connectWalletPopup(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  const [connectWallet, setConnectWallet] = useState(false);
  const [popup, setPopup] = useState(1);

  const handleDialogClose = () => {
    setPopup(1);
    props.disablePopup(connectWallet);
  };

  function truncateToDecimals(num, dec = 2) {
    let decimal = dec;
    if(num != 0 && num.toString().split('.')[0] == 0 && num.toString().split('.')[1].charAt(0) == 0 && num.toString().split('.')[1].charAt(1) == 0){
      decimal = 4;
    }
    const calcDec = Math.pow(10, decimal);
    return Math.trunc(num * calcDec) / calcDec;
  }

  const loginErrorMessage = () =>
  toast.error(validationsMessages.VALIDATE_BROWSER_LOGIN, {
    duration: 4000,
    position: validationsMessages.TOASTS_POSITION,
    className: "toast-div-address",
  });
  const redirectErrorMessage = () =>
  toast.error(validationsMessages.VALIDATE_BROWSER_REDIRECTING, {
    duration: 4000,
    position: validationsMessages.TOASTS_POSITION,
    className: "toast-div-address",
  });
  const disableMetamaskMessage = () =>
  toast.error(validationsMessages.VALIDATE_BROWSER_REDIRECTING, {
    duration: 4000,
    position: validationsMessages.TOASTS_POSITION,
    className: "toast-div-address",
  });


  const handleXDCPayWallet = async () => {
    // window.web3 = new Web3(window.ethereum);
    // if(!window.xdc){
    //   setPopup(2);
    // }
    // else{
      window.web3 = new Web3(window.xdc ? window.xdc : window.ethereum);


      if (window.web3.currentProvider) {
        if (!window.web3.currentProvider.hasOwnProperty("chainId")) {
          if(!window.xdc){
            setPopup(2);
          }
          else{
            //when metamask is not in effect
            const state = window.web3.givenProvider.publicConfigStore ? window.web3.givenProvider.publicConfigStore._state : window.web3.currentProvider.publicConfigStore._state;
            let address = state.selectedAddress;
            let network =
                state.networkVersion === "50" ? NETWORKS.XDC_MAINNET : NETWORKS.XDC_APOTHEM_TESTNET;
            let account = false;

            await window.web3.eth.getAccounts((err, accounts) => {
              if (err !== null) console.error("");
              else if (accounts.length === 0) {
                account = false;
              } else {
                account = true;
              }
            });

            if (!account) {
              loginErrorMessage();
            } else if (address || network) {
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
              props.login(accountDetails);
              handleDialogClose();
            }
          }

        } else {
          //metamask is also enabled with xdcpay
          disableMetamaskMessage();
        }
      } else {
        // For mobile and tab - redirect to App Store
        redirectErrorMessage();
      }
    //}

  };

  const browser = detect();

  return (
    <>
    <div><Toaster /></div>
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={props.user.isWalletOpen}
      classes={{
        paper: (popup === 2) ? classes.versionDialog : classes.dialog,
      }}
    >
      {(() => {
        switch(popup){
          case 1:
            return(
                <Container>
                  <DialogHeader>
                    <DialogTitle>Connect Wallet</DialogTitle>
                    <CrossIcon
                        onClick={() => handleDialogClose()}
                        src="/images/Cross.svg"
                        alt=""
                    />
                  </DialogHeader>
                  <Line />
                  <BoxContainer>
                    <Box>
                      <TitleContainer>
                        <Title>Step 1</Title>
                      </TitleContainer>
                      <ImgContainer>
                        <Img src="/images/XDC_sky_blue.svg" alt="" />
                      </ImgContainer>
                      <MainText>Install XDCPay</MainText>
                      <SubTextContainer>
                        <SubText>
                          Install XDCPay Chrome extension from <Link href={XDCPay_EXTENSION_URL} target="_blank">here</Link>.
                        </SubText>
                      </SubTextContainer>
                    </Box>
                    <Box>
                      <TitleContainer>
                        <Title>Step 2</Title>
                      </TitleContainer>
                      <ImgContainer>
                        <Img src="/images/Login.svg" alt="" />
                      </ImgContainer>
                      <MainText>Login to XDCPay</MainText>
                      <SubTextContainer>
                        <SubText>
                          Login to your account on XDCPay Chrome extension.
                        </SubText>
                      </SubTextContainer>
                    </Box>
                    <Box>
                      <TitleContainer>
                        <Title>Step 3</Title>
                      </TitleContainer>
                      <ImgContainer>
                        <Img src="/images/Wallet.svg" alt="" />
                      </ImgContainer>
                      <MainText>Connect Wallet</MainText>
                      <SubTextContainer>
                        <SubText>
                          Connect your <div></div> XDCPay wallet with Origin.
                        </SubText>
                      </SubTextContainer>
                    </Box>
                  </BoxContainer>
                  <div>
                    {browser?.name !== "chrome" ? (
                        <p className="shown-browser-error">
                          XDCPay wallet only supports Chrome browser.
                        </p>
                    ) : (
                        <ButtonContainer>
                          <Button>
                            <BtnImg src="/images/XDC_Icon_White.svg" />
                            <BtnText onClick={() => handleXDCPayWallet()}>
                              Connect Wallet
                            </BtnText>
                          </Button>
                        </ButtonContainer>
                    )}
                  </div>
                </Container>
            );
          case 2:
            return (
                <VersionContainer>
                  <DialogHeader>
                    <DialogTitle>Connect Wallet</DialogTitle>
                    <CrossIcon
                        onClick={() => handleDialogClose()}
                        src="/images/Cross.svg"
                        alt=""
                    />
                  </DialogHeader>
                  <VersionPopupLine />
                  <VersionPopupTextContainer>
                    {/* <VersionPopupText>Your XDC Pay wallet is not updated, Please update XDC Pay wallet to <VersionNumberText>v6.2.5</VersionNumberText> and connect your wallet</VersionPopupText> */}
                    <VersionPopupText>Update your XDCPay wallet to the latest version and connect again.</VersionPopupText>
                  </VersionPopupTextContainer>
                </VersionContainer>
            );
          default:
            return;
        }
      })()}

    </Dialog>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  disablePopup: (connectWallet) => {
    dispatch(handleWallet(connectWallet));
  },
  login: (accountDetails) => {
    dispatch(handleAccountDetails(accountDetails));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(connectWalletPopup);
