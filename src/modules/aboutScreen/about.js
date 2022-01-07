import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
export default function About(props) {
  return (
    <MainContainer>
      <MainBoxContainer>
        <Container>
          <LeftContainer>
            <Row>
              <DetailBox>
                Create your <Span>XRC20</Span>,<Span>XRC220</Span>and{" "}
                <Span>Stable coin</Span> on XDC Network with no coding required
              </DetailBox>
            </Row>
            <DataBox>
              SmartMint is a Smart Contract Tokenization platform that enables
              brands and organisations to seamlessly create Non-Fungible Tokens,
              StableCoins and fixed income instruments with the need for code.
            </DataBox>
            <Row>
              <Button>
                Create XRC20
                <img
                  className="XRC20"                 
                   alt=""
                  src="/images/Help.svg"
                />
              </Button>
              <Button>
                Create XRC220
                <img
                  className="XRC220"
                  alt=""
                  src="/images/Help.svg"
                />
              </Button>
              <Button>
                Stable coin
                <img
             className="stable-coin"
                  alt=""
                  src="/images/Help.svg"
                />
              </Button>
            </Row>
          </LeftContainer>
          <RightContainer>
            <VideoBox>
              <img
                style={{ width: "3.75rem", height: "3.75rem" }}
                alt=""
                src="/images/.svg"
              />
            </VideoBox>
          </RightContainer>
        </Container>
        <GreyContainer>
          <HeadingContainer>
            Introducing the most advanced token creator - by XDC
            <SubHead>
              Create a token for your next crypto project without any knowledge
              of coding.
            </SubHead>
          </HeadingContainer>
          <IconRow>
            <IconContainer>
              <img alt="" src="/images/VerifiedContract.svg" />
              <Title>Verified Contracts</Title>
              <SubTitle>
                Deploy your verified token contract on XDC Network without any
                coding
              </SubTitle>
            </IconContainer>
            <IconContainer>
              <img alt="" src="/images/AddToWallet.svg" />
              <Title>Add To Wallet</Title>
              <SubTitle>
                Add minted tokens directly to your XDCPay wallet by a click of
                button.
              </SubTitle>
            </IconContainer>
            <IconContainer>
              <img alt="" src="/images/ModularComponents.svg" />
              <Title>Modular Components</Title>
              <SubTitle>
                Add features like minting, burning and pausing to your tokens
              </SubTitle>
            </IconContainer>
          </IconRow>
        </GreyContainer>
      </MainBoxContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  ${'' /* display: flex; */}
  width: 100%;
  ${'' /* justify-content: center; */}
  ${'' /* @media (min-width:375px) and (max-width:768px) {
    margin-bottom: 5px;
    background: #ecf0f7 0% 0% no-repeat padding-box;
    opacity: 1;
  } */}
`;
const MainBoxContainer = styled.div`
  background: #ecf0f7 0% 0% no-repeat padding-box;
  
  display: flex;
  flex-direction: column;
  align-item: center;
  padding: 3.125rem;
  ${'' /* @media (min-width:375px) and (max-width:768px) {
    padding: 0.5rem;
  } */}
`;
const Container = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  ${'' /* width: 100%; */}
  display: flex;
  justify-content: center;
  align-self: center;
  height: 500px;
  max-width: 1306px;
${'' /* width: 1301px; */}
${'' /* height: 468px; */}
 
  ${'' /* @media (min-width:375px) and (max-width:768px) {
    margin: 0px;
    padding: 0;
    display: flex;
    flex-direction: column;
  } */}
`;
const RightContainer = styled.div`
   ${'' /* width: 100%; */}
  padding: 4.375rem;
  ${'' /* @media (min-width:375px) and (max-width:768px) {
  ${"" /* display:block; */}
  ${'' /* padding: 0px;
  height: 188px;  */}
`;
const LeftContainer = styled.div`
  ${'' /* width: 100%; */}
  padding: 2.5rem;
  ${'' /* @media (min-width:375px) and (max-width:768px) {
    padding: 1.5rem;
  } */}
`;
const Span = styled.span`
  color: #0089ff;
  white-space: nowrap;
`;
const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 47.438rem;
  width: 100%;
  ${'' /* @media (min-width:375px) and (max-width:768px) {
    display: block;
  } */}
`;
const DataBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 1rem;
  ${'' /* width: 520px;
height: 117px; */}
  ${'' /* @media (min-width:375px) and (max-width:768px) {
    margin-left: 50px;
  } */}
`;
const DetailBox = styled.div`
  width: 100%;
  padding-bottom: 0.938rem;
  font-size: 2rem;
  font-weight: 600;
  ${'' /* @media (min-width:375px) and (max-width:768px) {
    margin: 0px 0px 2rem 0px !important;
    ${"" /* margin-left: 50px; */}
    ${'' /* font-size: 1rem;
    padding: 0px; */}
  } */}
`;
const Button = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-position: 0.5rem;
  margin-right: 10px;
  padding: 0.875rem;
  item-align: center;
  background-size: 0.875rem;
  position: relative;
  background-color: #3163f0;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  margin-top: 1.875rem;
  height: 3.125rem;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
`;

const VideoBox = styled.div`
width: 540px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.125rem solid #d8d8d8;
  border-radius: 0.125rem;
  opacity: 1;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${
    "" /* @media (min-width: 355px) {
    left: 52px;
width: 271px;
height: 188px;
} */
  }
`;
const HeadingContainer = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #1f1f1f;
  padding: 3.75rem;

  ${
    "" /* @media (min-width: 355px) {
    top: 905px;
left: 50px;
width: 276px;
height: 42px;
text-align: center;
font: normal normal 600 18px/21px Inter;
letter-spacing: 0px;
color: #1F1F1F;
opacity: 1;
} */
  }
`;
const GreyContainer = styled.div`
  background-color: none;
  padding-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const Title = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  color: #1f1f1f;
  opacity: 1;
`;
const SubTitle = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #4b4b4b;
  margin-top: 0.438rem;
`;
const IconContainer = styled.div`
  padding: 0.625rem;
  width: 100%;
  height: 150px;
  margin: 0px 10px 20px 10px;
  max-width: 18.75rem;
  outline: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
const SubHead = styled.div`
  font-size: 1rem;
  color: #4b4b4b;
  text-align: center;
  width: 100%;
  padding-bottom: 1.25rem;
`;
