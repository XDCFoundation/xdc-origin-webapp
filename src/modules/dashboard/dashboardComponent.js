import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderComponent from "../header/header";
import DesktopSideMenu from "./sidebar";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const HomeComponent = (props) => {
  return (
    <>
      <Container></Container>
    </>
  );
};
const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  height: 100vh;
`;
const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
`;
const dashboardComponent = (props) => {
  return (
    <>
      <DashboardContainer>
        <HeaderComponent />
        <DesktopSideMenu />
      </DashboardContainer>
    </>
  );
};
export default dashboardComponent;
