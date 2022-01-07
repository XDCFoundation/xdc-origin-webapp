import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderComponent from "../header/header";
import DesktopSideMenu from "./sidebar";
import About from "../aboutScreen/about";
import { Column, Row } from "simple-flexbox";
import Footer from "../Footer";

const DashboardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const dashboardComponent = (props) => {
  return (
    <DashboardContainer>
      <HeaderComponent />
      <Row>
        <DesktopSideMenu />
        <About />
      </Row>
      {window.innerWidth <= 768 ? <Footer /> : ""}
    </DashboardContainer>
  );
};
export default dashboardComponent;
