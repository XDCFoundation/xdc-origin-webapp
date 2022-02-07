/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";
import { Tooltip, Fade, Menu, MenuItem } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  menu: {
    width: "178px",
    height: "167px",
  },
  item: {
    color: "#1F1F1F",
    fontSize: "15px",
    fontWeight: 500,
    marginBottom: "3px",
  },
}));

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
const MediaImg = styled.img`
  margin-right: 5px;
  width: 23px;
  height: 18px;
  cursor: pointer;
`;
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

function manageContractDetails(props) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles();

  //pause-popups-flow-states :
  const [isPauseOpen, setIsPauseOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [unpause, setUnpause] = useState(false);
  const [changeToResume, setChangeToResume] = useState("");

  const [isBurnOpen, setIsBurnOpen] = useState(false);
  const [isMintOpen, setIsMintOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);

  const togglePausePopup = (closeOpt) => {
    // console.log('h--',closeOpt)
    setIsPauseOpen(!isPauseOpen);
    setChangeToResume(closeOpt);
  };
  const toggleResumePopup = (opt) => {
    // console.log('pa--',opt)
    setIsResumeOpen(!isResumeOpen);
    setUnpause(true);
    if (opt === "pause") {
      setChangeToResume("");
      setUnpause(false);
    } else if (opt === "resume") {
      setUnpause(false);
    }
  };
  const toggleBurnPopup = () => {
    setIsBurnOpen(!isBurnOpen);
  };
  const toggleMintPopup = () => {
    setIsMintOpen(!isMintOpen);
  };
  const toggleTransferPopup = () => {
    setIsTransferOpen(!isTransferOpen);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIsActive(!isActive)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsActive(!isActive)
  };

  const handleURL = (link) => {
    if (link === "") {
      toast.error("Link Not Provided", {
        duration: 4000,
        position: "top-center",
        // className: "toast-div-address",
      });
    } else {
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
                    <ContractAddress>
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
                    <MediaImg
                      onClick={() =>
                        handleURL(props.deolyedTokenDetails?.website)
                      }
                      src="/images/Website_active.svg"
                    />
                    <MediaImg
                      onClick={() =>
                        handleURL(props.deolyedTokenDetails?.email)
                      }
                      src="/images/Email_Active.svg"
                    />
                    <MediaImg
                      onClick={() => handleURL("")}
                      src="/images/Facebook_Active.svg"
                    />
                    <MediaImg
                      onClick={() =>
                        handleURL(props.deolyedTokenDetails?.twitter)
                      }
                      src="/images/Twitter_Active.svg"
                    />
                    <MediaImg
                      onClick={() =>
                        handleURL(props.deolyedTokenDetails?.telegram)
                      }
                      src="/images/Telegram_Active.svg"
                    />
                    <MediaImg
                      onClick={() =>
                        handleURL(props.deolyedTokenDetails?.linkedIn)
                      }
                      src="/images/LinkedIn_Active.svg"
                    />
                    <MediaImg
                      onClick={() =>
                        handleURL(props.deolyedTokenDetails?.reddit)
                      }
                      src="/images/Reditt_Active.svg"
                    />
                    <MediaImg
                      onClick={() =>
                        handleURL(props.deolyedTokenDetails?.coinGecko)
                      }
                      src="/images/CoinDecko_Active.svg"
                    />
                  </MediaImgContainer>
                </InfoContainer>
              </LeftDiv>
              <RightDiv>
                <OptionImg
                  src="/images/Options_Inactive.svg"
                  onClick={handleMenuOpen}
                />
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
                  <MenuItem className={classes.item}>View on XDCScan</MenuItem>
                  <MenuItem className={classes.item}>Add to XDCPay</MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={() => handleOptionClick()}
                  >
                    Edit Contract Profile
                  </MenuItem>
                  <MenuItem className={classes.item}>
                    Download .Sol File
                  </MenuItem>
                </Menu>
              </RightDiv>
            </TopContainer>

            <MiddleContainer>
              <DetailsContainerFirst>
                <Title>Initial Supply</Title>
                <Amount>
                  {millify(props.deolyedTokenDetails?.tokenInitialSupply)}
                </Amount>
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
                <Amount>
                  {millify(props.deolyedTokenDetails?.mintedTokens)}
                </Amount>
                <Description>
                  <SubDes>Last minted:</SubDes> <SubContent>NA</SubContent>
                </Description>
              </DetailsContainer>
              <Divider />
              <DetailsContainer>
                <Title>Burnt Tokens</Title>
                <Amount>
                  {millify(props.deolyedTokenDetails?.burntTokens)}
                </Amount>
                <Description>
                  <SubDes>Last burnt:</SubDes> <SubContent>NA</SubContent>
                </Description>
              </DetailsContainer>
              <Divider />
              <DetailsContainer>
                <Title>Current Supply</Title>
                <Amount>
                  {millify(props.deolyedTokenDetails?.tokenCurrentSupply)}
                </Amount>
                <Description>
                  <SubDes>Updated:</SubDes>{" "}
                  <SubContent>
                    {moment(props.deolyedTokenDetails?.updatedAt).fromNow()}
                  </SubContent>
                </Description>
              </DetailsContainer>
            </MiddleContainer>

            <BottomContainer>
              {changeToResume !== "change" ? (
                <ActionDiv>
                  <BottomImg src="/images/Pause_Contract.png" />

                  <ActionHeading>Pause Contract</ActionHeading>
                  <ActionText>
                    Pause all transactions on this Contract
                  </ActionText>
                  <PauseButton onClick={togglePausePopup}>Pause</PauseButton>
                </ActionDiv>
              ) : (
                <ActionDiv>
                  <BottomImg src="/images/Pause_Contract.png" />

                  <ActionHeading>Unpause Contract</ActionHeading>
                  <ActionText>
                    Unpause Contract to allow transactions
                  </ActionText>
                  {unpause !== true ? (
                    <ResumeButton onClick={toggleResumePopup}>
                      Resume
                    </ResumeButton>
                  ) : (
                    <ResumeButton>Unpause</ResumeButton>
                  )}
                </ActionDiv>
              )}

              <ActionDiv>
                <BottomImg src="/images/Mint_Contract.svg" />
                <ActionHeading>Mint Tokens</ActionHeading>
                <ActionText>Add tokens to increase the supply</ActionText>
                <MintButton onClick={toggleMintPopup}>Mint</MintButton>
              </ActionDiv>

              <ActionDiv>
                <BottomImg src="/images/Burn_Contract.svg" />
                <ActionHeading>Burn Tokens</ActionHeading>
                <ActionText>Burn tokens to reduce the supply</ActionText>
                <BurnButton onClick={toggleBurnPopup}>Burn</BurnButton>
              </ActionDiv>

              <ActionDiv>
                <BottomImg src="/images/Transfer_Contract.svg" />
                <ActionHeading>Transfer Contract</ActionHeading>
                <ActionText>Transfer ownership of the Contract</ActionText>
                <TransferButton onClick={toggleTransferPopup}>Transfer</TransferButton>
              </ActionDiv>
            </BottomContainer>
          </ColumnContainer>
        </CommonContainer>
      </Container>
      {isPauseOpen && (
        <PauseContractPopup
          isOpen={isPauseOpen}
          handleClose={togglePausePopup}
        />
      )}
      {isResumeOpen && (
        <ResumeContractPopup
          isOpen={isResumeOpen}
          handleClose={toggleResumePopup}
        />
      )}
      {isBurnOpen && (
        <BurnContractPopup isOpen={isBurnOpen} handleClose={toggleBurnPopup} />
      )}
      {isMintOpen && (
        <MintContractPopup isOpen={isMintOpen} handleClose={toggleMintPopup} />
      )}
      {isTransferOpen && (
        <TransferOwnershipPopup isOpen={isTransferOpen} handleClose={toggleTransferPopup} />
      )}
    </>
  );
}

export default manageContractDetails;
