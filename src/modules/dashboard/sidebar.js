import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import "../../assets/styles/custom.css";
import {handleLogout, handleNavItem, handleSubNavItem, handleSubNavToken, updateAccountDetails} from "../../action";
import ScreenSizeDetector from "screen-size-detector";

function Sidebar(props) {
  const history = useHistory();
  const [isActive, setIsActive] = useState("");
  const [createContract, setCreateContract] = useState(false);
  const [subNavItems, setSubNavItems] = useState(false);

  const screen = new ScreenSizeDetector();

  const changeBackgound = (navItem) => {
    if (navItem === "create") {
      props.setSubNavItem(!subNavItems);
      setCreateContract(!createContract);

      props.setActiveNavItem(navItem);
    } else {
     
      props.setActiveNavItem(navItem);
      props.setSubNavItem(false);
      props.setSubNavToken("");

      if (navItem === "about")
        history.push("/")
      
      if(navItem === "deploy")
        history.push("/deploy-contract")
      
      if(navItem === "manage")
        history.push("/manage-contracts")
    }
  };

  const changeSubNavItemStyle = (navItem) => {
    props.setSubNavToken(navItem);
    if (navItem === "XRC20") history.push("/token-XRC20");
  };

  const handleBtn = () => {
    props.setActiveNavItem("faq");
    history.push("/FAQ");
  }
  const logout = () => {
    props.logout();
    props.setActiveNavItem("about");
    props.setSubNavItem(false);
    props.updateAccountDetails(null)
    history.push("/");
  }

  return (
    <SidebarContainer>
      <Wrapper
        className={props.userAccountDetails?.activeNavItem ===  "about" ? "activeNavItem" : "" }
        onClick={() => changeBackgound("about")}
      >
        {props.userAccountDetails?.activeNavItem === "about" ? (
          <Icon src="/images/Origin-Active.svg" />
        ) : (
          <Icon src="/images/InActive-Origin.svg" />
        )}
        <Heading
          className={props.userAccountDetails?.activeNavItem === "about" ? "activeText origin-space" : "origin-space"}
        >
        About Origin
        </Heading>
      </Wrapper>
      {props.userAccountDetails?.accountDetails?.address ? (
        <>
          <Wrapper
            className={props.userAccountDetails?.activeNavItem === "create" ? "activeNavItem" : ""}
            onClick={() => changeBackgound("create")}
          >
            {props.userAccountDetails?.activeNavItem === "create" ? (
              <Icon src="/images/CreateContract_Active.svg" />
            ) : (
              <Icon src="/images/CreateContract_Inactive.svg" />
            )}
            <Heading className={props.userAccountDetails?.activeNavItem === "create" ? "activeText" : ""}>
              Create Token
            </Heading>
          </Wrapper>
          {props.userAccountDetails?.subNavItems ? (
            <SubHeadingContainer>
              <SubWrapper onClick={() => changeSubNavItemStyle("XRC20")}>
                {props.userAccountDetails?.subNavToken === "XRC20" ? (
                  <SubIcon src="/images/Token-Active.svg" />
                ) : (
                  <SubIcon src="/images/Token-Inactive.svg" />
                )}
                <SubText
                  className={props.userAccountDetails?.subNavToken === "XRC20" ? "xrc_active" : ""}
                >
                  XRC20 Token
                </SubText>
                {props.userAccountDetails?.subNavToken === "XRC20" ? (
                  <RightArrow src="/images/Next.svg" />
                ) : (
                  ""
                )}
              </SubWrapper>
              {/* <SubWrapper onClick={() => changeSubNavItemStyle("XRC223")}>
                {props.userAccountDetails?.subNavToken === "XRC223" ? (
                  <SubIcon src="/images/Token-Active.svg" />
                ) : (
                  <SubIcon src="/images/Token-Inactive.svg" />
                )}
                <SubText
                  className={props.userAccountDetails?.subNavToken === "XRC223" ? "xrc_active" : ""}
                >
                  XRC223 Token
                </SubText>
                {props.userAccountDetails?.subNavToken === "XRC223" ? (
                  <RightArrow src="/images/Next.svg" />
                ) : (
                  ""
                )}
              </SubWrapper>
              <SubWrapper onClick={() => changeSubNavItemStyle("Stablecoin")}>
                {props.userAccountDetails?.subNavToken === "Stablecoin" ? (
                  <SubIcon src="/images/Token-Active.svg" />
                ) : (
                  <SubIcon src="/images/Token-Inactive.svg" />
                )}
                <SubText
                  className={
                    props.userAccountDetails?.subNavToken === "Stablecoin" ? "xrc_active" : ""
                  }
                >
                  Stablecoin
                </SubText>
                {props.userAccountDetails?.subNavToken === "Stablecoin" ? (
                  <RightArrow src="/images/Next.svg" />
                ) : (
                  ""
                )}
              </SubWrapper>  */}
            </SubHeadingContainer>
          ) : (
            ""
          )}
          <Wrapper
            className={props.userAccountDetails?.activeNavItem === "deploy" ? "activeNavItem" : ""}
            onClick={() => changeBackgound("deploy")}
          >
            {props.userAccountDetails?.activeNavItem === "deploy" ? (
              <Icon src="/images/DeployContract_Active.svg" />
            ) : (
              <Icon src="/images/Inactive-DeployContract.svg" />
            )}
            <Heading
              className={
                props.userAccountDetails?.activeNavItem === "deploy" ? "activeDeployText" : "deploy-margin"
              }
            >
              {" "}
              Deploy Saved Tokens
            </Heading>
          </Wrapper>
          <Wrapper
            className={props.userAccountDetails?.activeNavItem === "manage" ? "activeNavItem" : ""}
            onClick={() => changeBackgound("manage")}
            id="extraWidth"
          >
            {props.userAccountDetails?.activeNavItem === "manage" ? (
              <Icon id="manageIcon" src="/images/ManageContract_Active.svg" />
            ) : (
              <Icon id="manageIcon" src="/images/Inactive-ManageContract.svg" />
            )}
            <Heading  className={props.userAccountDetails?.activeNavItem === "manage" ? "activeText" : ""}>
              Manage Deployed Tokens
            </Heading>
          </Wrapper>
        </>
      ) : (
        ""
      )}

      {screen.width <= 768 ? (
        props.userAccountDetails?.activeNavItem === "faq" ? (
          <ActiveWrapper
            onClick={handleBtn}
              className={
                props.userAccountDetails?.subNavItems
                  ? "faq-margin-create"
                  : props.userAccountDetails?.accountDetails?.address
                  ? "faq-margin"
                  : "faq-margin-tab"
              }
          >
          <FAQIconActive src="/images/FAQ_Active.png" />
          <HeadingFAQActive className="activeText">FAQs</HeadingFAQActive>
        </ActiveWrapper>
          ): (
            <Wrapper
              onClick={handleBtn}
                className={
                  props.userAccountDetails?.subNavItems
                    ? "faq-margin-create"
                    : props.userAccountDetails?.accountDetails?.address
                    ? "faq-margin"
                    : "faq-margin-tab"
                }
            >
          <FAQIcon src="/images/Inactive-Faq.svg" />
          <Heading>FAQs</Heading>
        </Wrapper>
          )
      ) : (
            props.userAccountDetails?.activeNavItem === "faq" ? (
            <ActiveWrapper
              onClick={handleBtn}
                className={
                  props.userAccountDetails?.subNavItems
                    ? "faq-margin-create"
                    : props.userAccountDetails?.accountDetails?.address
                    ? "faq-margin"
                    : "faq-margin-extra"
              }
            >
              <FAQIconActive src="/images/FAQ_Active.png" />
              <HeadingFAQActive className="activeText">FAQs</HeadingFAQActive>
            </ActiveWrapper>
            ): (
              <Wrapper
              onClick={handleBtn}
                className={
                  props.userAccountDetails?.subNavItems
                    ? "faq-margin-create"
                    : props.userAccountDetails?.accountDetails?.address
                    ? "faq-margin"
                    : "faq-margin-extra"
                }
              >
                <FAQIcon src="/images/Inactive-Faq.svg" />
                <Heading>FAQs</Heading>
              </Wrapper>
            )
      )}
      {
      props.userAccountDetails?.accountDetails?.address ? (
      <Wrapper onClick={() => logout()}>
          <LogoutIcon src="/images/InActive-Logout.svg" />
        <Heading>Logout</Heading>
      </Wrapper>
      ) : (
        ""
      )
      }
      
      <CenterDiv>
        <img alt="" src="/images/Group 12.svg" />
      </CenterDiv>
    </SidebarContainer>
  );
}

const mapStateToProps = (state) => ({
  userAccountDetails: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(handleLogout());
  },
  setActiveNavItem: (isActive) => {
    dispatch(handleNavItem(isActive))
  },
  setSubNavItem: (subNavItems) => {
    dispatch(handleSubNavItem(subNavItems))
  },
  setSubNavToken: (isSubNavActive) => {
    dispatch(handleSubNavToken(isSubNavActive))
  },
  updateAccountDetails: (accountDetails) => {
    dispatch(updateAccountDetails(accountDetails));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);

const SidebarContainer = styled.div`
  z-index: 999;
  background: #102c78 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  min-width: 280px;
  max-width: 280px;
  height: 1024px;
  padding-top: 40px;
  position: sticky;
  top: 57px;
  @media (min-width: 425px) and (max-width: 768px) {
    height: 100%;
    /* margin-top: 56px; */
    position: fixed;
    overflow-y: scroll;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    height: 100%;
    /* margin-top: 55px; */
    padding-top: 20px;
    position: fixed;
    overflow-y: scroll;
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
const FAQIconActive = styled.img`
  cursor: pointer;
  margin-right: 20px;
  margin-left: -4px;
  margin-top: -4px;
  width: 32px;
  height: 32px;
  border: none;
  object-fit: cover;
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
  width: 100%;
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
const ActiveWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;
  height: 70px;
  white-space: nowrap;
  padding: 23px;
  background-color: #1d3c93 !important;
  &:hover {
    background: #1d3c93;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    margin-left: -20px;
    background-color: #1d3c93 !important;
  }
`;
const Heading = styled.span`
  text-align: left;
  /* font: normal normal medium 16px/20px Inter; */
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0px;
  
  color: #8ca6f0;
  opacity: 1;
`;
const HeadingFAQActive = styled.span`
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #8ca6f0;
  opacity: 1;
  margin-top: -4px;
  @media (min-width: 0px) and (max-width: 768px) {
    margin-top: 0px;
  }
`;
const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 15px 3rem 0;
  width: 230px;
  max-width: 230px;
  @media (min-width: 0px) and (max-width: 424px) {
    margin: 30px 0 100px 0;
  }
  @media (min-width: 425px) and (max-width: 460px) {
    margin: 30px 0 100px 0;
  }
`;
const SubHeadingContainer = styled.div`
  width: 180px;
  height: 40px;
  margin: 20px 0 25px 0;
`;
const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;
const SubIcon = styled.img`
  /* width: 20px;
  height: 20px; */
  /* background: #ffffff 0% 0% no-repeat padding-box; */
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
