import React from 'react'
import styled from 'styled-components'
import {Row, Column} from "simple-flexbox"

const ParentContainer = styled.div`
    height: 100%;
    max-width: 688px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    @media (max-width: 375px){
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 6px;
        margin: 0 auto;
        text-align: center;
        padding: 25px;
    }`;

const SuccessTokenIcon = styled.div`
    width: 78px;
    height: 78px;
    opacity: 1;
    margin: 0 auto;
    margin-top: 10%;
    margin-bottom: 8%;`;

const SuccessTokenText = styled.div`
    overflow-wrap: break-word;
    text-align: center;
    font: normal normal medium 24px/29px Inter;
    letter-spacing: 0px;
    font-size: 24px;
    color: #1F1F1F;
    font-weight: bold;
    margin: 0 auto;
    opacity: 1;
    margin-bottom: 8%;
    @media (max-width: 375px) {
        text-align: center;
        font-size: 18px;
        letter-spacing: 0px;
        color: #1F1F1F;
        opacity: 1;
        margin-bottom: 8%;
    }`

const SuccessTokenDetails = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #F4F4F4;
    padding-left: 10px;
    font-weight: 600;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 8%;
    @media (max-width: 375px) {
        text-align: center;
        font-weight: 600;
        border-radius: 8px;
        letter-spacing: 0px;
        color: #1F1F1F;
        opacity: 1;
        margin-bottom: 8%;
    };`;

const SuccessRows = styled.div`
    width: 100%;
    margin: 0 0 20px 0;
    display: flex;`;

const SuccessTokenKey = styled.span`
    width: 180px;
    white-space: nowrap;
    text-align: left;
    font: normal normal medium 16px/20px Inter;
    letter-spacing: 0px;
    color: #1F1F1F;
    opacity: 1;
    @media (max-width: 375px) {
        font-size: 14px;
        text-align: left;
        font: normal normal medium 14px/17px Inter;
        letter-spacing: 0px;
        color: #1F1F1F;
        opacity: 1;
    }`;
const KeyInfo = styled.img`
    margin-right: 10px;
    margin-bottom: 3px;`

const ValueDiv = styled.div`
    margin-left: 15px;
    width: 60%;
    font-weight: 100;
    text-align: left;
    font: normal normal normal 16px/20px Inter;
    letter-spacing: 0px;
    color: #1F1F1F;
    opacity: 1;`

const SuccessTokenValues = styled.div`
    text-align: left;
    font: normal normal normal 16px/20px Inter;
    letter-spacing: 0px;
    font-family: "sans-serif";
    font-size: 14px;
    color: #3163F0;
    opacity: 1;
    margin-left: 15px;
    overflow-wrap: anywhere;`;

const CopyIcon = styled.img`
    margin-left: 8px;
    margin-bottom: 3px;`;

const Buttons = styled.div`
width: 100%;
    justify-content: space-evenly;
    margin-bottom: 8%;
    @media (max-width: 375px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 8%;
    }`;

const ButtonAddToXDCPay = styled.button`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #D8D8D8;
    border-radius: 4px;
    opacity: 1;
    margin-right: 25px;
    color: black;
    @media (max-width: 375px) {
        order: 2;
        width: 100%;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #D8D8D8;
        border-radius: 4px;
        opacity: 1;;
    }`;

const ButtonManageToken = styled.button`
    background: #3163F0 0% 0% no-repeat padding-box;
    border-radius: 4px;
    border-width: 0px;
    color:#FFFFFF;
    opacity: 1;
    @media (max-width: 375px) {
        order: 1;
        width: 100%;
        background: #3163F0 0% 0% no-repeat padding-box;
        border-radius: 4px;
        opacity: 1;
        margin-bottom: 20px;
    }`;

const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    text-align: center;
    font: normal normal medium 16px/20px Inter;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    @media (max-width: 375px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 5px;
    }`;
const ButtonIcon = styled.img`
    margin-right: 10px;
    @media (max-width: 375px){
        margin-left: 20px;
    }`;

const ButtonName = styled.div`
    text-align: left;
    font: normal normal medium 18px/21px Inter;
    letter-spacing: 0px;
    color: #4B4B4B;
    opacity: 1;
    @media (max-width: 375px){
        text-align: left;
        font: normal normal medium 16px/20px Inter;
        letter-spacing: 0px;
        color: #4B4B4B;
        opacity: 1;
    }`


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
                        <SuccessTokenValues>
                            0x0336730a6a614ae4008e9760e…e878
                            <CopyIcon src="images/Copy.svg"></CopyIcon>
                        </SuccessTokenValues>
                    </SuccessRows>
                    <SuccessRows>
                        <SuccessTokenKey>
                            <KeyInfo src="images/Info.svg"></KeyInfo>
                            Contract Address:
                        </SuccessTokenKey>
                        <SuccessTokenValues>
                            0x0336730a6a614ae4008e9760e…e878
                            <CopyIcon src="images/Copy.svg"></CopyIcon>
                        </SuccessTokenValues>
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
        </div>
}


export default CreateToken;