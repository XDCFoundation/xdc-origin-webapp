/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import ScreenSizeDetector from "screen-size-detector";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: "auto",
    bottom: "auto",
    "@media screen and (min-width: 768px) and (max-width: 1023px)": {
      width: "520px",
    },
  },
});

const Container = styled.div`
  padding: 20px;
`;
const ContentHeading = styled.span`
  font: normal normal 600 16px/21px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  padding: 10px;
  text-align: center;
`;
const ContentHeadingTab = styled.span`
  font: normal normal 600 18px/21px Inter;
  letter-spacing: 0px;
  color: #2a2a2a;
  opacity: 1;
  padding: 10px;
  text-align: center;
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentText = styled.span`
  font: normal normal 600 14px/17px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding: 15px 10px 10px 10px;
  text-align: center;
  width: 84%;
`;
const ContentTextTab = styled.span`
  font: normal normal 600 16px/17px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding: 15px 10px 10px 10px;
  text-align: center;
  width: 84%;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  background: #fff 0 0 no-repeat padding-box;
  border: 1px solid #2049b9;
  border-radius: 4px;
  width: 206px;
  height: 38px;
  margin-top: 25px;
  font: normal normal 600 14px/17px Inter;
  color: #2149b9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

function ConnectWalletAlert(props) {
  const classes = useStyles();
  const screen = new ScreenSizeDetector();

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={props.open}
      onClose={props.onClose}
      classes={{
        paper: classes.dialog,
      }}
    >
      <Container>
        <TextContainer>
          {screen.width >= 768 && screen.width < 1024 ? (
            <ContentHeadingTab>XDCPay Extension Not Detected</ContentHeadingTab>
          ) : (
            <ContentHeading>XDCPay Extension Not Detected</ContentHeading>
          )}
        </TextContainer>
        <TextContainer>
          {screen.width >= 768 && screen.width < 1024 ? (
            <ContentTextTab>
              Use the desktop version of XDC Origin to create and manage your
              XRC tokens.
            </ContentTextTab>
          ) : (
            <ContentText>
              Use the desktop version of XDC Origin to create and manage your
              XRC tokens.
            </ContentText>
          )}
        </TextContainer>
        <ButtonContainer>
          <Button onClick={props.onClose}>I Understood</Button>
        </ButtonContainer>
      </Container>
    </Dialog>
  );
}

export default ConnectWalletAlert;
