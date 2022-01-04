import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";
function Header(props) {
  return (
    <HeaderContainer>
      <SpaceBetween>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: "12px",
          }}
        >
          <GridLogo src="/images/ShowApps.svg" />
          <div>
            <UserMenu1 src="images/menu.svg" />{" "}
          </div>
          <SmartMintLogo src="/images/About_Active.svg" />
          <Span>SmartMint</Span>
        </div>
        <div>
          <UserLogo src="/images/profile.svg" />
        </div>
        <div>
          <UserMenu src="images/menu.svg" />{" "}
        </div>
        <Button>Connect Wallet</Button>
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
  @media (max-width: 375px) {
    width: 375px;
    height: 117px;
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
  ${"" /* diplay:flex; */}
  border: 1px solid #FFFFFF;
  background: transparent;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  font: normal normal medium 15px/19px Inter;
  ${"" /* padding: 5px 20px 5px 20px; */}
  top: 10px;
  left: 1764px;
  width: 142px;
  height: 36px;
  @media (max-width: 375px) {
    display: none;
  }
`;
// const UserContainer = styled.img`
//   width: 190px;
//   background: #3e579a;
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   padding: 0px 10px;
// `;
const UserLogo = styled.img`
  display: none;
  @media (min-width: 200px) and (max-width: 375px) {
    border-radius: 50%;
    margin-left: 109px;
    width: 22px;
    height: 22px;
    display: flex;
    margin-top: 5px;
  }
`;
const UserMenu = styled.img`
  display: none;
  @media (min-width: 250px) and (max-width: 375px) {
    display: flex;
    margin-top: 6px;
    margin-right: 5px;
    left: 336px;
    width: 23px;
    height: 20px;
    opacity: 1;
  }
`;
const UserMenu1 = styled.img`
  display: none;
  @media (min-width: 376px) and (max-width: 768px) {
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
`;
