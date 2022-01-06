import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.125rem;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 45rem;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 22.1875rem;
  }
`;

const Column = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  margin: 0px 0px 67px 0px;
`;

const RowTwo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0px 0px 57px;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 30px 0px 0px 17px;
  }
`;
const CommonRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 57px;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 30px 0px 0px 18px;
  }
`;
const LastRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 57px 30px 0px;
  @media (min-width: 0px) and (max-width: 767px) {
    padding: 20px 18px 30px 0px;
  }
`;

const SpanOne = styled.div`
  text-align: left;
  font: normal normal 600 20px/24px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    font: normal normal 600 18px/21px Inter;
  }
`;
const SpanTwo = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    font: normal normal normal 14px/17px Inter;
    padding: 10px 0px 0px 0px;
  }
`;
const TextDiv = styled.div`
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #303134;
  opacity: 1;
  padding: 7px 0px 7px 0px;
`;
const InputDiv = styled.input`
  width: 783px;
  height: 40px;
  border: none;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  padding: 7px 0px 7px 0px;
  position: relative;
  top: 0;
  left: 0;
  ::placeholder {
    padding: 0px 0px 0px 7px;
    /* text-align: left; */
    font: normal normal medium 14px/17px Inter;
    letter-spacing: 0px;
    color: #a8acc1;
    opacity: 1;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 686px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 322px;
  }
`;
const BlurTextDiv = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #a2a2a2;
  opacity: 1;
  padding: 7px 0px 7px 0px;
`;
const CircleDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 128px;
  height: 128px;
  background: #f0f2fc 0% 0% no-repeat padding-box;
  border: 1px dashed #8ca6f0;
  border-radius: 124px;
  opacity: 1;
`;

const ButtonDiv = styled.div`
  width: 150px;
  height: 50px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 322px;
    height: 42px;
    background: #3163f0 0% 0% no-repeat padding-box;
  }
`;

const SpanText = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 12px 0px 0px 0px;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    padding: 8px 6px 0px 0px;
  }
`;

const InsideDiv = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 0;
  left: 0;
`;

const CircleRow = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const PopButton = styled.button`
  position: absolute;
  top: 5px;
  right: 62px;
  border: none;
  background: transparent;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    right: 16px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    right: 27px;
  }
`;

const PlusImage = styled.img`
  position: absolute;
  top: 52px;
  left: 54px;
  width: 21px;
  height: 21px;
  text-align: left;
  font: normal normal normal 44px/54px Inter;
  letter-spacing: 0px;
  color: #3163f0;
  opacity: 1;
`;

export default function Token(props) {
  return (
    <>
      <Parent>
        <Column>
          <RowTwo>
            <SpanOne>Basic Token Info</SpanOne>
            <SpanTwo>
              Tell us basic information about the token that you are building
            </SpanTwo>
          </RowTwo>

          <CommonRow>
            <TextDiv>Network</TextDiv>
            <InsideDiv>
              <InputDiv placeholder="XDC Mainnet" />
              <PopButton onClick={() => alert("hello")}>
                Change Network
              </PopButton>
            </InsideDiv>

            <BlurTextDiv>Current XDC Network Pay Connected</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Token Name</TextDiv>
            <InputDiv placeholder="e.g. XDC Network" />
            <BlurTextDiv>Choose a name for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Symbol</TextDiv>
            <InputDiv placeholder="e.g. XDC" />
            <BlurTextDiv>Choose symbol for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Token Image (PNG 256*256 px)</TextDiv>
            <CircleRow>
              <CircleDiv />
              <PlusImage src="/images/PlusIcon.svg" />
            </CircleRow>
          </CommonRow>

          <CommonRow>
            <TextDiv>Decimal</TextDiv>
            <InputDiv placeholder="8-18" />
            <BlurTextDiv>
              Insert the decimal precision of your token
            </BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Description</TextDiv>
            <InputDiv placeholder="A Dao Token" />
            <BlurTextDiv>Add description for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Website</TextDiv>
            <InputDiv placeholder="Website Address" />
            <BlurTextDiv>Add Website url for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Twitter(optional)</TextDiv>
            <InputDiv placeholder="e.g. Twitter Url" />
            <BlurTextDiv>Add Twitter page url for your token</BlurTextDiv>
          </CommonRow>

          <CommonRow>
            <TextDiv>Telegram</TextDiv>
            <InputDiv placeholder="e.g. Telegram Url" />
            <BlurTextDiv>Add Telegram group url for your token</BlurTextDiv>
          </CommonRow>

          <LastRow>
            <ButtonDiv>
              <SpanText>Continue</SpanText>
              {/* <img src="/images/Button_Next_Arrow.svg"></img> */}
            </ButtonDiv>
          </LastRow>
        </Column>
      </Parent>
    </>
  );
}
