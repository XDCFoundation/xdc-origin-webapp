import React from "react";
import styled from "styled-components";
const SidebarContainer = styled.div`
  background: #102c78 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 1080px;
  padding-top: 40px;
  @media (max-width: 375px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Icon = styled.img`
  cursor: pointer;
  margin-right: 13px;
  top: 153px;
  left: 24px;
  width: 22px;
  height: 19px;
  border: none;
`;
const Wrapper = styled.div`
  flex-wrap: wrap;
  cursor: pointer;
  width: 250px;
  height: 70px;
  white-space: nowrap;
  padding: 23px;
  &:hover {
    background: #1d3c93;
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
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
export default function Sidebar(props) {
  return (
    <SidebarContainer>
      <Wrapper>
        <Icon style={{ width: "25px" }} src="/images/About_Active.svg" />
        <Heading>About SmartMint</Heading>
      </Wrapper>
      <Wrapper>
        <Icon src="/images/CreateContract_Inactive.svg" />
        <Heading>Create Contract</Heading>
      </Wrapper>
      <Wrapper>
        <Icon src="/images/DeployContract_InActive.svg" />
        <Heading style={{ marginLeft: "-5px" }}> Deploy contracts</Heading>
      </Wrapper>
      <Wrapper>
        <Icon src="/images/ManageContract_InActive.svg" />
        <Heading>Manage Contracts</Heading>
      </Wrapper>
      <Wrapper style={{ marginTop: "30rem" }}>
        <Icon src="/images/FAQ_InActive.svg" />
        <Heading>FAQs</Heading>
      </Wrapper>
      <Wrapper>
        <Icon src="/images/Logout-InActive.svg" />
        <Heading>Logout</Heading>
      </Wrapper>
      <CenterDiv>
        <img alt="" src="/images/Group 12.svg" />
      </CenterDiv>
    </SidebarContainer>
  );
}
