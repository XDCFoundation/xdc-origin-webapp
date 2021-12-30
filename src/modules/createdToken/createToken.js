import React from 'react'
import styled from 'styled-components'

const ParentContainer = styled.div`
    width: 688px;
    height: 588px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;`;

const SuccessTokenIcon = styled.div`
    width: 78px;
    height: 78px;
    opacity: 1;
    margin: 0 auto;
    margin-top: 30px`;

const SuccessTokenText = styled.div`
    width: 398px;
    height: 29px;
    text-align: center;
    font: normal normal medium 24px/29px Inter;
    letter-spacing: 0px;
    font-size: 24px;
    color: #1F1F1F;
    font-weight: bold;
    margin-left: 115px;
    opacity: 1;`

const SuccessTokenDetails = styled.div`
    width: 585px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #F4F4F4;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;`;

const SuccessRows = styled.div`
    width: 100%;
    margin: 0 0 20px 0;
    display: flex;`;

const SuccessTokenKey = styled.span`
    text-align: left;
    margin-left: 40px;
    width: 40%;`;
const KeyInfo = styled.img`
    margin-right: 10px;
    margin-bottom: 3px;`
const ValueDiv = styled.div`
    text-align: left;
    width: 60%;
    font-weight: 100;`
const SuccessTokenValues = styled.a`
    text-align: left;
    font: normal normal normal 16px/20px Inter;
    letter-spacing: 0px;
    font-family: "sans-serif";
    font-size: 16px;
    color: #3163F0;
    opacity: 1;`;
const CopyIcon = styled.img`
    margin-left: 8px;
    margin-bottom: 3px;`;

const Buttons = styled.div`
    justify-content: space-evenly;`;

const ButtonAddToXDCPay = styled.button`
    width: 211px;
    height: 50px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    opacity: 1;
    margin-right: 25px;`;

const ButtonManageToken = styled.button`
    width: 211px;
    height: 50px;
    background: #3163F0 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border-width: 0px;
    color:#FFFFFF;
    opacity: 1;`;

const ButtonContent = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;`;
const ButtonIcon = styled.img`
    margin-right: 10px`;


const CreateToken= ()=>{
    return <div>
            <ParentContainer>
                <SuccessTokenIcon>
                    <img src="images/Success.svg"></img>
                </SuccessTokenIcon>
                <SuccessTokenText>
                    Successfully Created Meta Tokens
                </SuccessTokenText>
                <SuccessTokenDetails>
                    <SuccessRows>
                        <SuccessTokenKey >
                            <KeyInfo src="images/Info.svg"></KeyInfo>
                            Transaction Hash:
                        </SuccessTokenKey>
                        <ValueDiv>
                            <SuccessTokenValues>0x0336730a6a614ae4008e9760e…e878</SuccessTokenValues>
                            <CopyIcon src="images/Copy.svg"></CopyIcon>
                        </ValueDiv>
                    </SuccessRows>
                    <SuccessRows>
                        <SuccessTokenKey>
                            <KeyInfo src="images/Info.svg"></KeyInfo>
                            Contract Address:
                        </SuccessTokenKey>
                        <ValueDiv>
                            <SuccessTokenValues>0x0336730a6a614ae4008e9760e…e878</SuccessTokenValues>
                            <CopyIcon src="images/Copy.svg"></CopyIcon>
                        </ValueDiv>
                    </SuccessRows>
                    <SuccessRows>
                        <SuccessTokenKey>
                            <KeyInfo src="images/Info.svg"></KeyInfo>
                            Tokens Minted:
                        </SuccessTokenKey>
                        <ValueDiv>
                            10000000
                        </ValueDiv>
                    </SuccessRows>
                    <SuccessRows>
                        <SuccessTokenKey>
                            <KeyInfo src="images/Info.svg"></KeyInfo>
                            Gas Fee:
                        </SuccessTokenKey>
                        <ValueDiv>
                            0.00000000025 XDC (0.25 Gwei)
                        </ValueDiv>
                    </SuccessRows>
                </SuccessTokenDetails>
                <Buttons>
                    <ButtonAddToXDCPay>
                        <ButtonContent>
                            Add to XDCPay
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
        </div>
}


export default CreateToken;