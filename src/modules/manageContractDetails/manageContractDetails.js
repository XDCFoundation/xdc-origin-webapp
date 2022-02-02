/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";
import { Tooltip, Fade, Menu, MenuItem } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    width: "178px",
    height: "167px",
  },
  item: {
    color: "#1F1F1F",
    fontSize: "15px",
    fontWeight: 500,
  },
  selected: {
    backgroundColor: "none",
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

function manageContractDetails() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleOptionClick = () => {};

  return (
    <Container>
      <CommonContainer>
        <Heading>
          <BackArrow src="images/Button_Back_Arrow.svg" />
          <Text>Manage</Text>
        </Heading>

        <ColumnContainer>
          <TopContainer>
            <LeftDiv>
              <ImgContainer>
                <TokenImg src="/images/XDC_sky_blue.svg" />
              </ImgContainer>
              <InfoContainer>
                <TokenName>Metaverse</TokenName>
                <TokenSymbol>META</TokenSymbol>
                <AddressContainer>
                  <ContractAddress>
                    xdc5e6d170445cea1e9bf1ba5aae9eda2a1
                  </ContractAddress>
                  <Tooltip
                    title={open ? "Copied" : "Copy To Clipboard"}
                    placement="top"
                    arrow
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <CopyToClipboard text="xdc5e6d170445cea1e9bf1ba5aae9eda2a1">
                      <CopyIcon
                        src="/images/Copy.svg"
                        onClick={handleTooltipOpen}
                      />
                    </CopyToClipboard>
                  </Tooltip>
                </AddressContainer>
                <MediaImgContainer>
                  <MediaImg src="/images/Website_active.svg" />
                  <MediaImg src="/images/Email_Active.svg" />
                  <MediaImg src="/images/Facebook_Active.svg" />
                  <MediaImg src="/images/Twitter_Active.svg" />
                  <MediaImg src="/images/Telegram_Active.svg" />
                  <MediaImg src="/images/LinkedIn_Active.svg" />
                  <MediaImg src="/images/Reditt_Active.svg" />
                  <MediaImg src="/images/CoinDecko_Active.svg" />
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
                <MenuItem
                  selected={false}
                  classes={{ selected: classes.selected }}
                  className={classes.item}
                >
                  View on XDCScan
                </MenuItem>
                <MenuItem className={classes.item}>Add to XDCPay</MenuItem>
                <MenuItem className={classes.item}>
                  Edit Contract Profile
                </MenuItem>
                <MenuItem className={classes.item}>Download .Sol File</MenuItem>
              </Menu>
            </RightDiv>
          </TopContainer>

          <MiddleContainer>
            <DetailsContainerFirst>
              <Title>Initial Supply</Title>
              <Amount>10M</Amount>
              <Description>
                <SubDes>Created on:</SubDes>{" "}
                <SubContentSupply>11:30 AM, 7 Dec 2021</SubContentSupply>
              </Description>
            </DetailsContainerFirst>
            <Divider />
            <DetailsContainer>
              <Title>Minted Tokens</Title>
              <Amount>2M</Amount>
              <Description>
                <SubDes>Last minted:</SubDes>{" "}
                <SubContent>2 days ago</SubContent>
              </Description>
            </DetailsContainer>
            <Divider />
            <DetailsContainer>
              <Title>Burnt Tokens</Title>
              <Amount>0.5M</Amount>
              <Description>
                <SubDes>Last burnt:</SubDes> <SubContent>1 day ago</SubContent>
              </Description>
            </DetailsContainer>
            <Divider />
            <DetailsContainer>
              <Title>Current Supply</Title>
              <Amount>11.5M</Amount>
              <Description>
                <SubDes>Updated:</SubDes> <SubContent>5 min ago</SubContent>
              </Description>
            </DetailsContainer>
          </MiddleContainer>

          <BottomContainer>
            <ActionDiv>
              <BottomImg src="/images/Pause_Contract.png" />
              <ActionHeading>Pause Contract</ActionHeading>
              <ActionText>Pause all transactions on this Contract</ActionText>
              <PauseButton>Pause</PauseButton>
            </ActionDiv>

            <ActionDiv>
              <BottomImg src="/images/Burn_Contract.svg" />
              <ActionHeading>Burn Tokens</ActionHeading>
              <ActionText>Burn tokens to reduce the supply</ActionText>
              <BurnButton>Burn</BurnButton>
            </ActionDiv>

            <ActionDiv>
              <BottomImg src="/images/Mint_Contract.svg" />
              <ActionHeading>Mint Tokens</ActionHeading>
              <ActionText>Add tokens to increase the supply</ActionText>
              <MintButton>Mint</MintButton>
            </ActionDiv>

            <ActionDiv>
              <BottomImg src="/images/Transfer_Contract.svg" />
              <ActionHeading>Transfer Contract</ActionHeading>
              <ActionText>Transfer ownership of the Contract</ActionText>
              <TransferButton>Transfer</TransferButton>
            </ActionDiv>
          </BottomContainer>
        </ColumnContainer>
      </CommonContainer>
    </Container>
  );
}

export default manageContractDetails;
