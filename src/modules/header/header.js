import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";

function Header(props) {
  console.log(props)

  return (
    <HeaderContainer>
      <SpaceBetween>
        <div style={{ display: "flex", marginLeft: "12px" }}>
          <GridLogo
            src="/images/ShowApps.svg"/>
          <SmartMintLogo src="/images/About_Active.svg"/>
          <Span>SmartMint</Span>
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
`;
const SmartMintLogo = styled.img`

${'' /* background: #FFFFFF 0% 0% no-repeat padding-box; */}
width: 30px;
opacity: 1;
border-radius:5px;
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
border: 1px solid #FFFFFF;
  background: transparent;
  border-radius: 5px;
  font-size: 14px;
  color: #FFFFFF;
  font: normal normal medium 15px/19px Inter;
  ${'' /* padding: 5px 20px 5px 20px; */}
  top: 10px;
left: 1764px;
width: 142px;
height: 36px;
`;
const Span = styled.span`
top: 16px;
left: 109px;
width: 110px;
margin-top: 7px;
text-align: left;
font: normal normal medium 22px/26px Inter;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`;


