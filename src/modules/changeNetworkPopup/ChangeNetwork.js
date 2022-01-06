import * as React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'react-dropdown/style.css';
import { makeStyles } from "@material-ui/styles";
import { withStyles } from '@material-ui/core';
import {useTheme} from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const Header = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-width: 0px 0px 3px 0px;
      border-style: solid;
      border-bottom-color: #f2f2f2;`

const Cross = styled.img`
      margin-right: 3%;
      opacity: 1;`

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

// const DesktopAndTab = styled.div`
//       margin: 1px;
//       @media (max-width: 768px){
//         display: none;
//       }`;
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

const DesktopTab = styled.div`
    @media (max-width: 768px){
      display: none;
    }`
const ButtonForDesktop = styled.button`
    @media (max-width: 768px){
      display: none;
    }`
const System = styled.button`
    @media (max-width: 768px){
      display: visible;
    }`

// const useStyles = makeStyles((theme) => ({
//   "@media fullScreen (max-width: 768px)": {
//     paperWidthSm: {
//       minHeight: '100vh',
//       maxHeight: '100vh',
//     },
//   }
// }
// ));



export default function FormDialog() {

  
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();

  // const theme = useTheme();

  // const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleResize = () => {
    if (window.innerWidth < 769) {
      setOpen(false);
    } else {
      handleClickOpen()
      setOpen(true);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <ButtonForDesktop variant="outlined" onClick={handleClickOpen}>
        Change Network
      </ButtonForDesktop>
      <System>
      <DesktopTab>
        <Dialog aria-labelledby="customized-dialog-title" open= {open} >
          <Header>
              <DialogTitle>Change Network</DialogTitle>
              <Cross onClick={handleClose} src= 'images/Cross.svg'></Cross>
          </Header>
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
              <Ok onClick={handleClose}>OK</Ok>
            </Buttons>
          </Content>
        </Dialog>
        </DesktopTab>
        <MobileScreen >
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
        </System>
        
    </div>
  );
}


function DialogBox(){
  
}