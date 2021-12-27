import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";

const UserLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 7px;
`;
const HeaderContainer = styled.div`
  width: 100%;
  background: #091f5c 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 5px;
`;
const XDCContainer = styled.div`
  background: #324988;
  display: flex;
  color: white;
  border-radius: 5px;
  align-items: center;
  padding: 0 0 0 10px;
`;

const UserContainer = styled.div`
  width: 190px;
  background: #3e579a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;
const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 1px solid white;
  background: transparent;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  padding: 5px 20px 5px 20px;
`;

function Header(props) {
  console.log(props)

  return (
    <HeaderContainer>
      <SpaceBetween>
        <div >
        </div>
          <XDCContainer>
            <div></div>
          </XDCContainer>
          <Button>Connect Wallet</Button>
      </SpaceBetween>
    </HeaderContainer>
  );
}
export default Header;
