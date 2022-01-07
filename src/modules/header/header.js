import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";
function Header(props) {
  return (
    <HeaderContainer>
      <SpaceBetween>
        <div className="Space-between">
          <GridLogo src="/images/ShowApps.svg" />
          <div>
            <UserMenu1 src="images/menu.svg" />{" "}
          </div>
          <SmartMintLogo src="/images/About_Active.svg" />
          <Span>SmartMint</Span>
        </div>
        <div className="buttons">
          <UserLogo src="/images/profile.svg" />
          <UserMenu src="images/menu.svg" />
          <Button>Connect Wallet</Button>
        </div>
      </SpaceBetween>
    </HeaderContainer>
  );
}
export default Header;
const HeaderContainer = styled.div`
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 5px;
  height: 57px;
  @media (min-width: 0px) and (max-width: 1080px) {
    width: 100%;
    height: 100%;
  }
`;
const SmartMintLogo = styled.img`
  width: 30px;
  opacity: 1;
  border-radius: 5px;
`;
const GridLogo = styled.img`
  margin-right: 10px;
  top: 17px;
  left: 22px;
  width: 24px;
`;
const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 1px solid #ffffff;
  background: transparent;
  margin-left: 5%;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  font: normal normal medium 15px/19px Inter;
  top: 10px;
  left: 1764px;
  width: 142px;
  height: 36px;
  @media (min-width: 0px) and (max-width: 768px) {
    display: none;
  }
`;
const UserLogo = styled.img`
  display: none;
  @media (max-width: 767px) {
    border-radius: 50%;
    margin-right: 6px;
    ${"" /* margin-left: 109px; */}
    width: 22px;
    height: 22px;
    display: flex;
    margin-top: 5px;
  }
`;
const UserMenu = styled.img`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    margin-top: 6px;
    margin-right: 10px;
    margin-left: 5%;
    width: 23px;
    height: 20px;
    opacity: 1;
  }
`;
const UserMenu1 = styled.img`
  display: none;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    margin-top: 7px;
    margin-right: 10px;
    margin-left: 6px;
    width: 26px;
    height: 22px;
  }
`;
const Span = styled.span`
  top: 16px;
  left: 109px;
  width: 110px;
  margin-top: 7px;
  text-align: left;
  font: normal normal medium 22px/26px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 768px) {
   margin-top:4px;
   margin-left: 3px;
  }
`;
