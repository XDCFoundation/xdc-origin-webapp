import React, {Component} from 'react';
import styled from 'styled-components'


const NetworkChangeContainer = styled.div`
      background: #f2f2f2 0% 0% no-repeat padding-box;
      width: 75%;
      padding: 15px;
      margin: 0 auto;
      margin-bottom: 8%;`

const NetworksDrop = styled.select`
      text-align: left;
      font: normal normal normal 9px/11px Inter;
      letter-spacing: 0px;
      color: #2A2A2A;
      border-width: 0px;
      width: 100%;
      white-space: pre-wrap;
      opacity: 1;`

const DropdownContainer = styled.div`
      background-color: #FFFFFF;
      border-radius: 15px;
      width: 40%;
      padding: 3%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      @media (max-width: 768px){
        width: 70%;
      }`

const Content = styled.div`
      text-align: center;
      padding: 10%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 768px){
      }`

const Buttons = styled.div`
      margin: 0 auto;`

const Ok = styled.button`
      background: #3163F0 0% 0% no-repeat padding-box;
      border-radius: 4px;
      border-width: 0px;
      color: #ffffff;
      opacity: 1;
      min-width:100px;
      min-height: 40px;`

const ContentText = styled.div`
      text-align: center;
      font: normal normal normal 16px/24px Inter;
      letter-spacing: 0px;
      color: #4B4B4B;
      margin-bottom: 5%;
      @media (max-width: 768){
        font: normal normal normal 14px/24px Inter;
      }`

const ContentTextNames = styled.span`
      text-align: center;
      font: normal normal 600 16px/24px Inter;
      letter-spacing: 0px;
      color: #4B4B4B;
      @media (max-width: 768){
          font: normal normal 600 14px/24px Inter;
      }`

const MobileHeader = styled.div`
    padding: 5%;
    display: flex;
    flex-direction: row;
    text-align: left;
    font: normal normal 600 18px/21px Inter;
    letter-spacing: 0px;
    color: #1F1F1F;
    opacity: 1;`;

const BackArrow = styled.img`
    margin-right: 5%;`

const MobileScreen = styled.div`
    background: #ECF0F7 0% 0% no-repeat padding-box;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    opacity: 1;
    @media (min-width: 769px){
      display: none;
    }`

const ChangeNetworkContainer = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
    margin: 3%;`

export default class ChangeNetworkMobile extends Component {
    render() {
        return (
                <MobileScreen>
                <MobileHeader>
                    <BackArrow src="images/Button_Back_Arrow.svg"></BackArrow>
                    Change Network
                </MobileHeader>
                <ChangeNetworkContainer>
                    <Content>
                    <NetworkChangeContainer>
                        <DropdownContainer>
                        <img src='images/XDC-Icon-128X128.svg'></img>
                        <NetworksDrop>
                            <option value="XDC Apothem TestNet">XDC Apothem TestNet</option>
                            <option value="XDC Mainnet">XDC Mainnet</option>
                        </NetworksDrop>
                        </DropdownContainer>
                    </NetworkChangeContainer>
                    <ContentText>
                        To mint the tokens on new network, open XDCPay and simply change the network. Currently we support only <ContentTextNames>XDC Mainnet</ContentTextNames> and <ContentTextNames>XDC Apothem Testnet</ContentTextNames>.
                    </ContentText>
                    <Buttons>
                        <Ok>OK</Ok>
                    </Buttons>
                    </Content>
                </ChangeNetworkContainer>
                </MobileScreen>
            );
    }

}