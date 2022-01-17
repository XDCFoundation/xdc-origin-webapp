import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const BgContainer = styled.div`
  background-color: #ecf0f7;
  height: 100%;
  width: 100%;
  background-size: cover;
  padding-top: 4%;
  padding-bottom: 4%;
`;

const ParentContainer = styled.div`
  max-width: 688px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  @media (max-width: 768px) {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    padding: 25px;
  }
`;

const SuccessTokenIcon = styled.div`
  width: 78px;
  height: 78px;
  opacity: 1;
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 8%;
`;

const SuccessTokenText = styled.div`
  overflow-wrap: break-word;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0px;
  color: #1f1f1f;
  font-weight: bold;
  margin: 0 auto;
  opacity: 1;
  margin-bottom: 8%;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 18px;
    letter-spacing: 0px;
    color: #1f1f1f;
    opacity: 1;
    margin-bottom: 8%;
  }
`;

const SuccessTokenDetails = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f4f4f4;
  font-weight: 600;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8% !important;
  /* margin: auto; */
  @media (max-width: 768px) {
    text-align: center;
    font-weight: 600;
    border-radius: 8px;
    letter-spacing: 0px;
    color: #1f1f1f;
    opacity: 1;
    margin-bottom: 8% !important;
    /* margin: auto; */
  } ;
`;

const SuccessRows = styled.div`
  width: 100%;
  display: flex;
`;

const SuccessTokenKey = styled.span`
  width: 180px;
  white-space: nowrap;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media (max-width: 768px) {
    width: 180px;
    text-align: left;
    font-size: 14px;
    font: normal normal medium 14px/17px Inter;
    letter-spacing: 0px;
    color: #1f1f1f;
    opacity: 1;
  }
`;
const KeyInfo = styled.img`
  margin-right: 10px;
  margin-bottom: 3px;
`;

const ValueDiv = styled.div`
  margin-left: 15px;
  width: 60%;
  font-weight: 100;
  margin-top: 3.5px;
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media (max-width: 768px) {
    font: normal normal normal 14px/17px Inter;
    overflow-wrap: anywhere;
  }
`;

const SuccessTokenValues = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  font-family: "sans-serif";
  color: #3163f0;
  opacity: 1;
  margin-top: 3.5px;
  margin-left: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 768px) {
    text-align: left;
    font: normal normal normal 14px/17px Inter;
    letter-spacing: 0px;
    font-family: "sans-serif";
    color: #3163f0;
    opacity: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const CopyIcon = styled.img`
  margin-left: 8px;
  margin-bottom: 3px;
`;

const Buttons = styled.div`
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 8%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 8%;
  }
`;

const ButtonAddToXDCPay = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  opacity: 1;
  margin-right: 25px;
  color: black;
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    opacity: 1;
  }
`;

const ButtonManageToken = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border-width: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: 768px) {
    order: 1;
    width: 100%;
    background: #3163f0 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    margin-bottom: 20px;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  text-align: center;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
  }
`;
const ButtonIcon = styled.img`
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const ButtonName = styled.div`
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (max-width: 768px) {
    text-align: left;
    font: normal normal medium 16px/20px Inter;
    letter-spacing: 0px;
    color: #4b4b4b;
    opacity: 1;
  }
`;

const LineSeparation = styled.hr`
  border-top: 1px solid #f4f4f4;
  width: 100%;
`;

const CreateToken = (props) => {
  // console.log("props---", props.location);

  let gasPrice = Number(props.location.gasPrice)
  let gasFee = (gasPrice * props.location.state.gasUsed) / Math.pow(10, props.location.parsingDecimal)
  let gweiValue = gasPrice / Math.pow(10, 9)
  let newContractAddress = props.location.state.contractAddress.replace(/0x/, 'xdc')
  //   console.log('b---',newContractAddress)
  //   console.log('gp--',typeof gasPrice,gasPrice)
  //   console.log('gp--',typeof gasFee,gasFee)
  //   console.log('gp--',typeof gweiValue,gweiValue)
  return (
    <>
      <BgContainer>
        <ParentContainer>
          <SuccessTokenIcon>
            <img src="images/Success.svg"></img>
          </SuccessTokenIcon>
          <SuccessTokenText>Successfully Created {props.location.createdToken || ""} Token</SuccessTokenText>
          <SuccessTokenDetails>
            <SuccessRows>
              <SuccessTokenKey>
                <KeyInfo src="images/Info.svg"></KeyInfo>
                Transaction Hash:
              </SuccessTokenKey>
              <SuccessTokenValues>
                {props.location.state.transactionHash || ""}
                <CopyIcon src="images/Copy.svg"></CopyIcon>
              </SuccessTokenValues>
            </SuccessRows>
            <LineSeparation></LineSeparation>
            <SuccessRows>
              <SuccessTokenKey>
                <KeyInfo src="images/Info.svg"></KeyInfo>
                Contract Address:
              </SuccessTokenKey>
              <SuccessTokenValues>
                {newContractAddress || ""}
                <CopyIcon src="images/Copy.svg"></CopyIcon>
              </SuccessTokenValues>
            </SuccessRows>
            <LineSeparation></LineSeparation>
            <SuccessRows>
              <SuccessTokenKey>
                <KeyInfo src="images/Info.svg"></KeyInfo>
                Tokens Minted:
              </SuccessTokenKey>
              <ValueDiv>{props.location.parsingSupply || ""}</ValueDiv>
            </SuccessRows>
            <LineSeparation></LineSeparation>
            <SuccessRows>
              <SuccessTokenKey>
                <KeyInfo src="images/Info.svg"></KeyInfo>
                Gas Fee:
              </SuccessTokenKey>
              <ValueDiv>{gasFee + '(' + gweiValue + ' ' + 'Gwei)'} </ValueDiv>
            </SuccessRows>
          </SuccessTokenDetails>
          <Buttons>
            <ButtonAddToXDCPay>
              <ButtonContent>
                <ButtonName>Add to XDCPay</ButtonName>
                <ButtonIcon src="images/XDC-Icon-128X128.svg"></ButtonIcon>
              </ButtonContent>
            </ButtonAddToXDCPay>
            <ButtonManageToken>
              <ButtonContent>
                Manage Token
                <ButtonIcon src="images/Button_Next_Arrow.svg"></ButtonIcon>
              </ButtonContent>
            </ButtonManageToken>
          </Buttons>
        </ParentContainer>
      </BgContainer>
    </>
  );
};

export default CreateToken;
