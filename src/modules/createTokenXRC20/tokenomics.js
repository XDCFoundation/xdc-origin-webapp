import React from "react";
import styled from "styled-components";
import BasicInfoPage from "./basicInformation";

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: 898px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 720px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    width: 355px;
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
const CommonRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 41px 0px 27px 57px;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding: 30px 0px 0px 18px;
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
const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 57px 30px 57px;
  @media (min-width: 0px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 41px 18px 30px 18px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 17px 30px 17px;
  }
`;
const BackButton = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: 141px;
  height: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    justify-content: center;
    width: 322px;
    height: 42px;
    margin-bottom: 12px;
  }
`;
const ContinueButton = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    justify-content: center;
    width: 322px;
    height: 42px;
    margin-top: 12px;
  }
`;
const ImgDiv = styled.img`
  width: 15px;
  height: 13px;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;
const BackText = styled.div`
  text-align: right;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;
const ContinueText = styled.div`
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 0 8px 0px 8px;
  }
`;

export default function Tokenomics(props) {

  const saveAndContinue = () => {
    if(props.tokenData.tokenSupply >= 1){
      props.nextStep()
    }
    else{
      return;
    }
  }
  return (
    <>
      <Parent>
        <Column>
          <RowTwo>
            <SpanOne>Set up your Tokenomics</SpanOne>
            <SpanTwo>
              Create the rules around supply and limits of your token
            </SpanTwo>
          </RowTwo>
          <CommonRow>
            <TextDiv>Initial Supply</TextDiv>
            <InputDiv type="number" onChange={(e) => props.handleChange(e)} name="tokenSupply" value={props.tokenData.tokenSupply}/>
            <BlurTextDiv>
              Insert the initial numbers of tokens available
            </BlurTextDiv>
           {props.tokenData.tokenSupply >= 1 ? "" : <p className="shown-error">Supply should be more than 0</p> } 
          </CommonRow>
          <ButtonsRow>
            <BackButton onClick={() => props.prevStep()}>
              <ImgDiv src="/images/Button-Back-Arrow.svg" />
              <BackText>Back</BackText>
            </BackButton>
            <ContinueButton onClick={saveAndContinue}>
              <ContinueText>Continue</ContinueText>
              <ImgDiv src="/images/Button_Next_Arrow.svg" />
            </ContinueButton>
          </ButtonsRow>
        </Column>
      </Parent>
    </>
  );
}
