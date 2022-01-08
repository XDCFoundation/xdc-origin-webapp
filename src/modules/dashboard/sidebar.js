import React, { useState } from "react";
import styled from "styled-components";
import "../../assets/styles/custom.css";

export default function Sidebar(props) {
  const [isActive, setIsActive] = useState("");
  const [isSubNavActive, setIsSubNavActive] = useState("XRC20");
  const [subNavItems, setSubNavItems] = useState(false);

  const changeBackgound = (navItem) => {
    setIsActive(navItem);
    if (navItem === "create") {
      setSubNavItems(!subNavItems);
    }
  };

  const changeSubNavItemStyle = (navItem) => {
    setIsSubNavActive(navItem);
  };

  return (
    <SidebarContainer>
      <Wrapper
        className={isActive === "about" ? "activeNavItem" : ""}
        onClick={() => changeBackgound("about")}
      >
        {isActive === "about" ? (
          <Icon src="/images/About_Active.svg" />
        ) : (
          <Icon src="/images/About_Inactive.svg" />
        )}
        <Heading className={isActive === "about" ? "activeText" : ""}>
          About SmartMint
        </Heading>
      </Wrapper>
      <Wrapper
        className={isActive === "create" ? "activeNavItem" : ""}
        onClick={() => changeBackgound("create")}
      >
        {isActive === "create" ? (
          <Icon src="/images/CreateContract_Active.svg" />
        ) : (
          <Icon src="/images/CreateContract_Inactive.svg" />
        )}
        <Heading className={isActive === "create" ? "activeText" : ""}>
          Create Contract
        </Heading>
      </Wrapper>
      {subNavItems ? (
        <SubHeadingContainer>
          <SubWrapper onClick={() => changeSubNavItemStyle("XRC20")}>
            <SubIcon src="" />
            <SubText className={isSubNavActive === "XRC20" ? "xrc_active" : ""}>
              XRC20 Token
            </SubText>
            {isSubNavActive === "XRC20" ? (
              <RightArrow src="/images/Next.svg" />
            ) : (
              ""
            )}
          </SubWrapper>
          <SubWrapper onClick={() => changeSubNavItemStyle("XRC223")}>
            <SubIcon src="" />
            <SubText
              className={isSubNavActive === "XRC223" ? "xrc_active" : ""}
            >
              XRC223 Token
            </SubText>
            {isSubNavActive === "XRC223" ? (
              <RightArrow src="/images/Next.svg" />
            ) : (
              ""
            )}
          </SubWrapper>
          <SubWrapper onClick={() => changeSubNavItemStyle("Stablecoin")}>
            <SubIcon src="" />
            <SubText
              className={isSubNavActive === "Stablecoin" ? "xrc_active" : ""}
            >
              Stablecoin
            </SubText>
            {isSubNavActive === "Stablecoin" ? (
              <RightArrow src="/images/Next.svg" />
            ) : (
              ""
            )}
          </SubWrapper>
        </SubHeadingContainer>
      ) : (
        ""
      )}
      <Wrapper
        className={isActive === "deploy" ? "activeNavItem" : ""}
        onClick={() => changeBackgound("deploy")}
      >
        {isActive === "deploy" ? (
          <Icon src="/images/DeployContract_Active.svg" />
        ) : (
          <Icon src="/images/DeployContract_InActive.svg" />
        )}
        <Heading
          className={
            isActive === "deploy" ? "activeDeployText" : "deploy-margin"
          }
        >
          {" "}
          Deploy contracts
        </Heading>
      </Wrapper>
      <Wrapper
        className={isActive === "manage" ? "activeNavItem" : ""}
        onClick={() => changeBackgound("manage")}
      >
        {isActive === "manage" ? (
          <Icon src="/images/ManageContract_Active.svg" />
        ) : (
          <Icon src="/images/ManageContract_InActive.svg" />
        )}
        <Heading className={isActive === "manage" ? "activeText" : ""}>
          Manage Contracts
        </Heading>
      </Wrapper>
      <Wrapper className="faq-margin">
        <FAQIcon src="/images/FAQ_InActive.svg" />
        <Heading>FAQs</Heading>
      </Wrapper>
      <Wrapper>
        <LogoutIcon src="/images/Logout-InActive.svg" />
        <Heading>Logout</Heading>
      </Wrapper>
      <CenterDiv>
        <img alt="" src="/images/Group 12.svg" />
      </CenterDiv>
    </SidebarContainer>
  );
}
const SidebarContainer = styled.div`
  z-index: 999;
  background: #102c78 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 1023px;
  padding-top: 40px;
  @media (min-width: 425px) and (max-width: 768px) {
    height: 967px;
    margin-top: 56px;
    position: fixed;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    height: 638px;
    margin-top: 55px;
    padding-top: 20px;
    position: fixed;
  }
`;
const Icon = styled.img`
  cursor: pointer;
  margin-right: 13px;
  top: 153px;
  left: 24px;
  width: 30px;
  height: 30px;
  border: none;
`;
const FAQIcon = styled.img`
  cursor: pointer;
  margin-right: 24px;
  top: 153px;
  left: 24px;
  width: 24px;
  height: 24px;
  border: none;
`;
const LogoutIcon = styled.img`
  cursor: pointer;
  margin-right: 13px;
  top: 153px;
  left: 24px;
  width: 32px;
  height: 32px;
  border: none;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 250px;
  height: 70px;
  white-space: nowrap;
  padding: 23px;
  &:hover {
    background: #1d3c93;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    margin-left: -20px;
  }
`;
const Heading = styled.span`
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #8ca6f0;
  opacity: 1;
`;
const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 15px 3rem 0;
  width: 230px;
  max-width: 230px;
`;
const SubHeadingContainer = styled.div`
  width: 180px;
  height: 120px;
  margin: 20px 0 25px 0;
`;
const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;
const SubIcon = styled.img`
  width: 20px;
  height: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-right: 20px;
`;
const SubText = styled.span`
  width: 113px;
  min-width: 113px;
  height: 20px;
  margin: -5px 25px 0 0;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #8ca6f0;
  opacity: 1;
`;
const RightArrow = styled.img`
  width: 13px;
  height: 13px;
  opacity: 1;
`;
