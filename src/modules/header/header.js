import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import "../../assets/styles/custom.css";
import ConnectWallet from "../connectWallet/connectWalletPopup";
import Sidebar from "../dashboard/sidebar";

function Header(props) {
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderContainer>
        <SpaceBetween>
          <div className="Space-between">
            <GridLogo src="/images/ShowApps.svg" />
            <div>
              {/* <UserMenu1
                onClick={() => toggleSidebar()}
                src="images/menu.svg"
              />{" "} */}
            </div>
            <SmartMintLogo src="/images/About_Active.svg" />
            <Span onClick={() => history.push('/')}>SmartMint</Span>
          </div>
          <div className="buttons">
            <UserLogo src="/images/profile.svg" />
            <UserMenu onClick={() => toggleSidebar()} src="images/menu.svg" />
            <Button >Connect Wallet</Button>
          </div>
        </SpaceBetween>
      </HeaderContainer>
      {isOpen ? <Sidebar /> : ""}
    </>
  );
}
export default Header;
const HeaderContainer = styled.div`
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 5px;
  height: 57px;
  position: sticky;
  top: 0;
  z-index: 1300;
  @media (min-width: 0px) and (max-width: 1080px) {
    width: 100%;
    padding-bottom: 20px;
    position: fixed;
    top: 0;
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
  @media (max-width: 425px) {
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
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    margin-top: 6px;
    margin-right: 10px;
    margin-left: 5%;
    width: 23px;
    height: 20px;
    opacity: 1;
    cursor: pointer;
  }
`;
const UserMenu1 = styled.img`
  display: none;
  @media (min-width: 425px) and (max-width: 768px) {
    display: flex;
    margin-top: 7px;
    margin-right: 10px;
    margin-left: 6px;
    width: 26px;
    height: 22px;
    cursor: pointer;
  }
`;
const Span = styled.span`
  top: 16px;
  left: 109px;
  width: 110px;
  margin-top: 7px;
  text-align: left;
  cursor: pointer;
  font: normal normal medium 22px/26px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 768px) {
    margin-top: 4px;
    margin-left: 3px;
  }
`;
