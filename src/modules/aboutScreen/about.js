import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useHistory } from "react-router";
import Web3 from "web3";
import { handleAccountDetails, handleNavItem, handleSubNavItem, handleSubNavToken, handleWallet } from "../../action";
import { connect } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Tooltip, Typography, ClickAwayListener } from "@material-ui/core";

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#FFFFFF",
    color: "#4B4B4B",
    maxWidth: "402px",
    width: "402px",
    height: "215px",
    fontSize: "16px",
    fontWeight: "normal",
    boxShadow: "0px 3px 12px #0000001A",
    padding: "23.5px",
    borderRadius: "4px",
    wordSpacing: "2px"
  },
}))(Tooltip);

const MobileTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#FFFFFF",
    color: "#4B4B4B",
    maxWidth: "257px",
    width: "257px",
    height: "232px",
    fontSize: "14px",
    fontWeight: "normal",
    boxShadow: "0px 3px 12px #0000001A",
    padding: "23.5px 15.77px 23.5px 23.5px",
    borderRadius: "4px",
    wordSpacing: "2px",
    lineHeight: "17px"
  },
}))(Tooltip);

const useStyles = makeStyles(theme => ({
  arrow: {
    "&:before": {
      border: "1px solid #e6e8ed",
    },
    color: theme.palette.common.white,
  },
  typography: {
    color: "#1F1F1F",
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "13px"
  },
  typographyMobile: {
    color: "#1F1F1F",
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "14px"
  },
}))

function About(props) {
  const classes = useStyles();
  const history = useHistory();
  const [connectWallet, setConnectWallet] = useState(true);
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleXDCPayWallet = async () => {
    if (
      !props?.currentUser?.isLoggedIn ||
      props?.currentUser?.accountDetails === null
    ) {
      props.user(connectWallet);
    } else if(props?.currentUser?.isLoggedIn){
      history.push("/token-XRC20");
      props.setActiveNavItem("create");
      props.setSubNavItem(true);
      props.setSubNavToken("XRC20");
    }
  };

  return (
    <MainContainer>
      <MainBoxContainer>
        <Container>
          <LeftContainer>
            <Para>
              <DetailBox>
                Create your <Span>XRC20</Span>, <Span>XRC223</Span> and{" "}
                <Span>Stable coin</Span> on XDC Network with no coding required
              </DetailBox>
              <DataBox>
                Origin is a Smart Contract Tokenization platform that enables
                brands and organisations to seamlessly create Non-Fungible
                Tokens, StableCoins and fixed income instruments with the need
                for code.
              </DataBox>
            </Para>
            <RightContainer>
              <VideoBox>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=K-tHZkV6zAs"
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoBox>
            </RightContainer>
          </LeftContainer>
          <ButtonContainer>
            <ButtonDiv>
              <Button onClick={() => handleXDCPayWallet()}>
                Create XRC20
                <CustomTooltip
                  arrow
                  placement="bottom-start"
                  classes={{ arrow: classes.arrow }}
                  title={
                    <React.Fragment>
                      <Typography color="inherit" className={classes.typography}>
                        What is XRC20 Token?
                      </Typography>
                      {
                        "XRC20 is a standard for fungible tokens, in other words, XRC20 tokens have a property that makes each token exactly the same in type and value as any other token. XRC20 has emerged as the technical standard for token creation on the XDC Network."
                      }
                    </React.Fragment>
                  }
                >
                  <img className="XRC20" alt="" src="/images/Help.svg" />
                </CustomTooltip>
              </Button>
              {
                window.innerWidth < 768 ? (
                  <ClickAwayListener onClickAway={handleTooltipClose}>
                <MobileTooltip
                    arrow
                    placement="bottom-end"
                    classes={{ arrow: classes.arrow }}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title={
                      <React.Fragment>
                        <TooltipHeader>
                          <Typography color="inherit" className={classes.typographyMobile}>
                            What is XRC20 Token?
                          </Typography>
                          <CrossImgMobile src="/images/Cross.svg" alt="" />
                        </TooltipHeader>
                        {
                          "XRC20 is a standard for fungible tokens, in other words, XRC20 tokens have a property that makes each token exactly the same in type and value as any other token. XRC20 has emerged as the technical standard for token creation on the XDC Network."
                        }
                      </React.Fragment>
                    }
                  >
                  <Img className="" alt="" src="/images/Info.svg" onClick={handleTooltipOpen}/>
                </MobileTooltip>
              </ClickAwayListener>
                ) : (
                  <ClickAwayListener onClickAway={handleTooltipClose}>
                  <CustomTooltip
                      arrow
                      placement="bottom-start"
                      classes={{ arrow: classes.arrow }}
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={handleTooltipClose}
                      open={open}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title={
                        <React.Fragment>
                          <TooltipHeader>
                            <Typography color="inherit" className={classes.typography}>
                              What is XRC20 Token?
                            </Typography>
                            <CrossImg src="/images/Cross.svg" alt="" />
                          </TooltipHeader>
                          {
                            "XRC20 is a standard for fungible tokens, in other words, XRC20 tokens have a property that makes each token exactly the same in type and value as any other token. XRC20 has emerged as the technical standard for token creation on the XDC Network."
                          }
                        </React.Fragment>
                      }
                    >
                    <Img className="" alt="" src="/images/Info.svg" onClick={handleTooltipOpen}/>
                  </CustomTooltip>
                </ClickAwayListener>
                )
              }
            </ButtonDiv>
            {/* <ButtonDiv> */}
            {/* <Button className="create-btn">
                Create XRC223
                <img className="XRC220" alt="" src="/images/Help.svg" />
              </Button>
              <Img className="" alt="" src="/images/Info.svg" />
            </ButtonDiv>
            <ButtonDiv>
              <Button className="create-btn">
                Create Stable coin
                <img className="stable-coin" alt="" src="/images/Help.svg" />
              </Button>
              <Img className="" alt="" src="/images/Info.svg" /> */}
            {/* </ButtonDiv> */}
          </ButtonContainer>
        </Container>
        <GreyContainer>
          <HeadingContainer>
            <SubHead>
              Introducing the most advanced token creator - by XDC
            </SubHead>
            <SubHeadTiny>
              Create a token for your next crypto project without any knowledge
              of coding.
            </SubHeadTiny>
          </HeadingContainer>
          <IconRow>
            <IconContainer>
              <img className="p-36" alt="" src="/images/VerifiedContract.svg" />
              <Title>Verified Contracts</Title>
              <SubTitle>
                Deploy your verified token contract on XDC Network without any
                coding
              </SubTitle>
            </IconContainer>
            <IconContainer>
              <img className="p-36" alt="" src="/images/AddToWallet.svg" />
              <Title>Add To Wallet</Title>
              <SubTitle>
                Add minted tokens directly to your XDCPay wallet by a click of
                button.
              </SubTitle>
            </IconContainer>
            <IconContainer>
              <img
                className="p-36"
                alt=""
                src="/images/ModularComponents.svg"
              />
              <Title>Modular Components</Title>
              <SubTitle>
                Add features like minting, burning and pausing to your tokens
              </SubTitle>
            </IconContainer>
          </IconRow>
        </GreyContainer>
      </MainBoxContainer>
    </MainContainer>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  user: (connectWallet) => {
    dispatch(handleWallet(connectWallet));
  },
  login: (accountDetails) => {
    dispatch(handleAccountDetails(accountDetails));
  },
  setActiveNavItem: (isActive) => {
    dispatch(handleNavItem(isActive))
  },
  setSubNavItem: (subNavItems) => {
    dispatch(handleSubNavItem(subNavItems))
  },
  setSubNavToken: (isSubNavActive) => {
    dispatch(handleSubNavToken(isSubNavActive))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);

const MainContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 58px;
  }
`;
const MainBoxContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-item: center;
  padding: 3.125rem;

  @media (min-width: 1025px) and (max-width: 1400px) {
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1.5rem;
    height: 100%;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    padding: 4.5rem 1rem;
    height: 100%;
  }
`;
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  max-width: 1306px;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 6px;
  }
`;
const RightContainer = styled.div`
  min-width: 50%;
`;
const LeftContainer = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem 0 4rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 6rem 4.5rem 6rem;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
  }
`;
const Para = styled.div`
  margin-right: 98px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0px !important;
    padding-bottom: 62px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0px !important;
    padding: 33px 23px;
  }
`;
const Img = styled.img`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
const ButtonContainer = styled.div`
  padding: 0 2.5rem 0 4rem;
  padding-bottom: 50px;
  display: flex;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0px !important;
    justify-content: space-evenly;
    ${"" /* justify-content: center; */}
    margin-bottom: 40px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    padding: 0px !important;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 0px;
    display: block;
    height: 40px;
    flex-basis: max-content;
  }
`;
const Span = styled.span`
  color: #0089ff;
  white-space: nowrap;
`;
const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  ${"" /* max-width: 70.438rem; */}
  ${"" /* width:90%; */}
    max-width: 1000px;
  margin-top: 90px;
  width: 100%;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 15px;
  }
  @media (min-width: 1025px) and (max-width: 1400px) {
    margin-top: 10px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    display: block;
    margin-top: 10px;
  }
`;
const DataBox = styled.div`
  display: flex;
  width: 100%;
  font: normal normal normal 21px Inter;
  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    font-size: 18px;
  }
  @media (min-width: 1025px) and (max-width: 1199px) {
    font: normal normal normal 16px Inter;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    font: normal normal normal 19px Inter;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    ${"" /* display:flex; */}
    height: 145px;
    ${"" /* font-size:16px; */}
    text-align: center;
    font: normal normal normal 16px/25px Inter;
    letter-spacing: 0px;
    color: #4b4b4b;
    opacity: 1;
    padding-top: 19px;
  }
`;
const DetailBox = styled.div`
  font: normal normal 600 32px Inter;
  ${"" /* padding-left: 35px; */}
  margin-top: 0px;
  ${"" /* padding-bottom: 0.938rem; */}
  padding-bottom: 25px;
  ${"" /* font: normal normal 600 32px/39px Inter; */}
  @media (min-width:1200px) and (max-width: 1400px) {
    font: normal normal 600 29px Inter;
  }
  @media (min-width: 1025px) and (max-width: 1199px) {
    font: normal normal normal 600 26px Inter;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    font: normal normal 600 32px/39px Inter;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    height: 63px;
    text-align: center;
    font: normal normal 600 18px/21px Inter;
    letter-spacing: 0px;
    opacity: 1;
  }
`;
const ButtonDiv = styled.div`
  ${"" /* display:none; */}
  margin-top: -30px;
  @media (min-width: 1400px) and (max-width: 1600px) {
    margin-top: 17px;
  }
  @media (min-width: 1025px) and (max-width: 1400px) {
    margin-top: 17px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0px 10px 0px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0px 10px 0px;
  }
`;
const Button = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-position: 0.5rem;
  margin-right: 10px;
  padding: 0.875rem;
  item-align: center;
  background-size: 0.875rem;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  height: 3.125rem;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-right: 6px;
    ${"" /* margin-left: 33px; */}
  }
  @media (min-width: 0px) and (max-width: 767px) {
    display: flex;
    padding: 5px;
    width: 264px;
    height: 40px;
    border-radius: 4px;
    ${"" /* margin-bottom: 1.4rem; */}
    ${
      "" /* margin-left: auto;
    margin-right: auto; */
    }
    align-items: center;
    justify-content: center;
  }
`;
const VideoBox = styled.div`
  ${"" /* width: 540px; */}
  width:100%;

  height: 328px !important;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.125rem solid #d8d8d8;
  border-radius: 0.125rem;
  opacity: 1;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 474px;
    height: 288px !important;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    height: 188px !important;
    width: 271px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #d8d8d8;
    border-radius: 6px;
    margin-top: 26px;
    margin-bottom: 2rem;
  }
`;
const HeadingContainer = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: #1f1f1f;
  padding: 3.75rem;
  @media (min-width: 1025px) and (max-width: 1300px) {
    padding-top: 10px !important;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    ${"" /* height: 42px; */}
    display:flex;
    text-align: center;
    font: normal normal 600 18px/21px Inter;
    letter-spacing: 0px;
    color: #1f1f1f;
    flex-direction: column;
    padding: 2rem 1.4rem 0 1.4rem;
  }
`;
const GreyContainer = styled.div`
  background-color: none;
  padding-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  color: #1f1f1f;
  opacity: 1;
`;
const SubTitle = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #4b4b4b;
  margin-top: 0.438rem;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 236px;
  }
`;
const IconContainer = styled.div`
  padding: 0.625rem;
  width: 100%;
  height: 150px;
  ${"" /* margin-right:79px; */}
  margin: 0px 10px 20px 10px;
  ${"" /* max-width: 18.75rem; */}
  outline: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    height: auto;
    margin: 2rem 0 0 0 !important;
    ${"" /* max-width: 0rem; */}
  }
`;

const SubHead = styled.div`
  font-size: 2rem;
  color: #4b4b4b;
  text-align: center;
  width: 100%;
  padding-bottom: 1.25rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 25px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 1rem;
    margin-top: 1.5rem;
  }
`;
const SubHeadTiny = styled.div`
  height: 100%;
  text-align: center;
  font: normal normal normal 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  @media (min-width: 768px) and (max-width: 1024px) {
    ${"" /* margin-bottom: 50px; */}
  }
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: 16px;
  }
`;
const TooltipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CrossImg = styled.img`
  margin-top: -18px;
  cursor: pointer !important;
`;

const CrossImgMobile = styled.img`
  margin-top: -17px;
  cursor: pointer !important;
  width: 13px;
  height: 13px;
`;