import React, { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const DialogContainer = styled.div`
  width: 466px;
  height: 210px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;
const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DeleteText = styled.span`
  margin: 12px 0 0 20px;
  width: 63px;
  height: 24px;
  text-align: left;
  font: normal normal 600 20px/24px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  white-space: nowrap;
  opacity: 1;
`;
const CrossIcon = styled.img`
  margin: 12px 22.69px 0 0;
  width: 15px;
  height: 15px;
  background: 0% 0% no-repeat padding-box;
  opacity: 1;
  cursor: pointer;
`;
const Line = styled.hr`
  margin: 11.19px 0 24.81px 0;
  width: 466px;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CancelButton = styled.button`
  width: 121px;
  height: 44px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a2a2a2;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  outline: none;
  margin-right: 21.62px;
`;
const ResumeButton = styled.button`
  width: 121px;
  height: 44px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  outline: none;
  border: none;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0 0 20px 0;
`;

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 50,
    left: 727,
    "@media screen and (max-width: 768px)": {
      top: 47,
      left: 105,
    },
  },
});

export default function ResumeContract(props) {
  const classes = useStyles();

  return (
    <>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="simple-dialog-title"
        open={props.isOpen}
        classes={{
          paper: classes.dialog,
        }}
      >
        <DialogContainer>
          <DialogHeader>
            <DeleteText>Resume Contract</DeleteText>
            <CrossIcon
              onClick={() => props.handleClose("resume")}
              src="/images/Cross.svg"
              alt=""
            />
          </DialogHeader>
          <Line />
          <Header>
            Do you want to unpause the MetaVerse
            <br /> Contract? All transactions will be allowed again.
          </Header>
          <ButtonContainer>
            <CancelButton onClick={() => props.handleClose("resume")}>
              Cancel
            </CancelButton>
            <ResumeButton onClick={() => props.handleClose("pause")}>
              Resume
            </ResumeButton>
          </ButtonContainer>
        </DialogContainer>
      </Dialog>
    </>
  );
}
