import React from "react";
import Header from "../header/header";
import styled from "styled-components";
import { useHistory } from "react-router";
import { detect } from "detect-browser";
import Footer from '../Footer'

const Container = styled.div`
position: absolute;
  top: 57px;
  width: 100%;
  background: #ecf0f7 0% 0% no-repeat padding-box;
`;
const HeadingContainer = styled.div`
  width: "100%";
  display: flex;
  align-items: center;
  margin: 36px 0 16px 10px;
`;
const LeftArrow = styled.img`
  margin: 0 25.78px 0 0;
`;
const Heading = styled.span`
  width: 133px;
  height: 21px;
  text-align: left;
  font: normal normal 600 18px/21px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
`;
const CommonContainer = styled.div`
  width: 355px;
  opacity: 1;
  margin: 0 auto 36px auto;
`;
const BoxContainer = styled.div`
  width: 355px;
  height: 597px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  margin: 0 auto 0 auto;
  padding-top: 22px;
`;
const Box = styled.div`
  width: 330px;
  height: 111px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  opacity: 1;
  margin: 0 0 16px 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BoxContent = styled.div`
  width: 298px;
  height: 67px;
`;
const Title = styled.span`
  width: 42px;
  height: 17px;
  text-align: center;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #7b7979;
  opacity: 1;
  margin: 0 0 7px 4px;
`;
const InfoContainer = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 43px;
  height: 43px;
  margin-right: 10px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  width: 114px;
  height: 17px;
  font: normal normal 600 14px/17px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  margin-bottom: 5px;
`;
const SubText = styled.span`
  width: 245px;
  height: 17px;
  text-align: left;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  opacity: 1;
`;
const Link = styled.a`
  color: #3163f0;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;
const Button = styled.div`
  width: 264px;
  height: 42px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const BtnImg = styled.img`
  margin-right: 19px;
`;
const BtnText = styled.span`
  width: 130px;
  font: normal normal medium 18px/21px Inter;
  font-size: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const browser = detect();

function ConnectWalletMobile() {
  const history = useHistory();
  return (
    <Container>
      <Header />
      <CommonContainer>
        <HeadingContainer>
          <LeftArrow onClick={() => history.push('/')} src="/images/Button_Back_Arrow.svg" alt="" />
          <Heading>Connect Wallet</Heading>
        </HeadingContainer>
      <div>{browser?.name !== "chrome" ? (<p className="shown-browser-error">XDCPay wallet only supports Chrome browser !!</p>) : ("")}</div>
      <BoxContainer>
        <Box>
          <BoxContent>
            <Title>Step 1</Title>
            <InfoContainer>
              <Img src="/images/XDC_sky_blue.svg" />
              <TextContainer>
                <Text>Install XDCPay</Text>
                <SubText>
                  Install XDCPay App from <Link>here</Link>.
                </SubText>
              </TextContainer>
            </InfoContainer>
          </BoxContent>
        </Box>
        <Box>
          <BoxContent>
            <Title>Step 2</Title>
            <InfoContainer>
              <Img src="/images/Login.svg" />
              <TextContainer>
                <Text>Login to XDCPay</Text>
                <SubText>
                  Login to your account on XDCPay<div></div> App.
                </SubText>
              </TextContainer>
            </InfoContainer>
          </BoxContent>
        </Box>
        <Box>
          <BoxContent>
            <Title>Step 3</Title>
            <InfoContainer>
              <Img src="/images/Wallet.svg" />
              <TextContainer>
                <Text>Connect Wallet</Text>
                <SubText>Connect your XDCPay wallet with Origin.</SubText>
              </TextContainer>
            </InfoContainer>
          </BoxContent>
        </Box>
        <ButtonContainer>
          <Button>
            <BtnImg src="/images/XDC_Icon_White.svg" />
            <BtnText>Connect Wallet</BtnText>
          </Button>
        </ButtonContainer>
      </BoxContainer> 
      </CommonContainer>
      <Footer />
    </Container>
  );
}

export default ConnectWalletMobile;
