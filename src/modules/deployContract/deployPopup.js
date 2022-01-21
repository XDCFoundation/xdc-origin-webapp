import React from "react";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../assets/styles/deployContract.css";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 40,
    left: 727,
    "@media screen and (max-width: 1660px) and (min-width: 1440px) ": {
      left: 487,
    },
    "@media screen and (max-width: 1440px) and (min-width: 1280px) ": {
      left: 387,
    },
    "@media screen and (max-width: 768px)": {
      top: 37,
      left: 105,
    },
    "@media screen and (min-width: 375px) and (max-width: 425px)": {
      top: 32,
      left: 0,
      marginLeft: "10px",
      marginRight: "-10px",
    },
  },
});

function deployPopup({ open, deployPopupClose,deployTokenName }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <Dialog
      onClose={deployPopupClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      classes={{
        paper: classes.dialog,
      }}
      disableBackdropClick
    >
      <DialogContainer>
        <HeaderContainer>
          <DialogHeader>{deployTokenName} Token</DialogHeader>
        </HeaderContainer>
        <LoaderContainer>
          <div className="loader" />
        </LoaderContainer>
        <XDCImg src="/images/XDC_Blue_Logo.svg" alt="" />
        <DialogFooter>Deploying to XDC Apothem Testnet…</DialogFooter>
      </DialogContainer>
    </Dialog>
  );
}

export default deployPopup;

const DialogContainer = styled.div`
  width: 522px;
  height: 473px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    width: 355px;
    height: 541px;
  }
`;
const HeaderContainer = styled.div`
    width: 522px;
    height: 24px;
    margin: 20px 0 0 0;
    display: flex;
    justify-content: center;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 355px;
    height: 21px;
    margin: 26px 0 0 0;
    display: flex;
    justify-content: center;
  }
`;
const DialogHeader = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 550;
  letter-spacing: 0px;
  color: #191919;
  opacity: 1;
  @media screen and (max-width: 768px) and (min-width: 425px) {
    display: none;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    font: normal normal 600 18px/21px Inter;
  }
`;
const LoaderContainer = styled.div`
  width: 298px;
  height: 298px;
  margin: 35px 0 0 114px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    margin: 0 0 0 -15px;
  }
`;
const XDCImg = styled.img`
  margin: -325px 0 0 218px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    margin: -280px 0 0 132px;
  }
`;
const DialogFooter = styled.div`
  width: 522px;
  height: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: normal normal normal 16px/20px Inter;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 355px;
    height: 17px;
    margin-top: -28px;
    font: normal normal normal 14px/17px Inter;
  }
`;
