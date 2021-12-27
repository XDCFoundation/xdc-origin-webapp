import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  background: #102c78 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */
  height: 100%;
  width: 280px;
  padding-top: 15px;
`;
// const Icon = styled.img`
//   cursor: pointer;
//   margin-right: 13px;
// `;

const Wrapper = styled.div`
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
  max-width: 240px;
  white-space: nowrap;
  padding: 23px;
  &:hover {
    background: #1d3c93;
  }
`;
const Heading = styled.span`
  color: #ffffff;
`;
export default function Sidebar(props) {
  return (
    <SidebarContainer>
      <Wrapper>
        <Heading>About Smartmints</Heading>
      </Wrapper>
      <Wrapper>
        <Heading>Create Contract</Heading>
      </Wrapper>
      <Wrapper>
        <Heading> Deploy contracts</Heading>
      </Wrapper>
      <Wrapper>
        <Heading>Manage Contracts</Heading>
      </Wrapper>
      <Wrapper>
        <Heading>FAQs</Heading>
      </Wrapper>
      <Wrapper>
        <Heading>Logout</Heading>
      </Wrapper>
    </SidebarContainer>
  );
}
