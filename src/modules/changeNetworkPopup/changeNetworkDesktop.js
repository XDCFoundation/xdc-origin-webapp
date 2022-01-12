import * as React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import "react-dropdown/style.css";
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: 0px 0px 3px 0px;
  border-style: solid;
  border-bottom-color: #f2f2f2;
`;
const Cross = styled.img`
  margin-right: 3%;
  opacity: 1;
`;
const NetworkChangeContainer = styled.div`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  width: 75%;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 8%;
`;
const NetworksDrop = styled.select`
  text-align: left;
  font: normal normal normal 9px/11px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  border-width: 0px;
  width: 100%;
  white-space: pre-wrap;
  opacity: 1;
`;
const DropdownContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  width: 40%;
  padding: 3%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 767px) {
    width: 70%;
  }
`;
const Content = styled.div`
  text-align: center;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 767px) {
  }
`;
const Buttons = styled.div`
  margin: 0 auto;
`;
const Ok = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border-width: 0px;
  color: #ffffff;
  opacity: 1;
  min-width: 100px;
  min-height: 40px;
`;
const ContentText = styled.div`
  text-align: center;
  font: normal normal normal 16px/24px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  margin-bottom: 5%;
  @media (max-width: 768) {
    font: normal normal normal 14px/24px Inter;
  }
`;
const ContentTextNames = styled.span`
  text-align: center;
  font: normal normal 600 16px/24px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  @media (max-width: 768) {
    font: normal normal 600 14px/24px Inter;
  }
`;
const DesktopTab = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <DesktopTab>
        <Dialog className="display-pop-up" open={true}> {/* given value true is hardcoded. will update while integration */}
          <Header>
            <DialogTitle>Change Network</DialogTitle>
            <Cross onClick={() => props.handleClose()} src="images/Cross.svg"></Cross>
          </Header>
          <Content>
            <NetworkChangeContainer>
              <DropdownContainer>
                <img src="images/XDC-Icon-128X128.svg"></img>
                <NetworksDrop>
                  <option value="XDC Apothem TestNet">
                    XDC Apothem TestNet
                  </option>
                  <option value="XDC Mainnet">XDC Mainnet</option>
                </NetworksDrop>
              </DropdownContainer>
            </NetworkChangeContainer>
            <ContentText>
              To mint the tokens on new network, open XDCPay and simply change
              the network. Currently we support only{" "}
              <ContentTextNames>XDC Mainnet</ContentTextNames> and{" "}
              <ContentTextNames>XDC Apothem Testnet</ContentTextNames>.
            </ContentText>
            <Buttons>
              <Ok onClick={() => props.handleClose()}>OK</Ok>
            </Buttons>
          </Content>
        </Dialog>
      </DesktopTab>
    </div>
  );
}