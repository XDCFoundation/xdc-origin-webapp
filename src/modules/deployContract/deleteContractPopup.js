import React from "react";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

function deleteContract(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  const handleDeleteClick = (tokenId) => {
    props.deleteContract(tokenId);
    props.handleClose()
  }

  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="simple-dialog-title"
      open={props.open}
      classes={{
        paper: classes.dialog,
      }}
    >
      <DialogContainer>
        <DialogHeader>
          <DeleteText>Delete</DeleteText>
          <CrossIcon onClick={props.handleClose} src="/images/Cross.svg" alt="" />
        </DialogHeader>
        <Line />
        <DialogText>Do you want to delete MetaVerse Contract?</DialogText>
        <ButtonContainer>
          <CancelButton onClick={props.handleClose}>Cancel</CancelButton>
          <DeleteButton onClick={() => handleDeleteClick(props.tokenId)}>Delete</DeleteButton>
        </ButtonContainer>
      </DialogContainer>
    </Dialog>
  );
}

export default deleteContract;

const DialogContainer = styled.div`
  width: 466px;
  height: 186px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  @media screen and (max-width: 768px) {
    width: 498px;
    height: 235px;
  }
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
  @media screen and (max-width: 768px) {
    margin: 15px 0 42px 0;
  }
`;
const DialogText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 466px;
  height: 20px;
  text-align: center;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media screen and (max-width: 768px) {
    font: normal normal normal 16px/24px Inter;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 466px;
  margin-top: 21.5px;
  @media screen and (max-width: 768px) {
    margin-top: 32px;
  }
`;
const CancelButton = styled.button`
  width: 121px;
  height: 50px;
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
  @media screen and (max-width: 768px) {
    height: 44px;
  }
`;
const DeleteButton = styled.button`
  width: 121px;
  height: 50px;
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: center;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  outline: none;
  border: none;
  @media screen and (max-width: 768px) {
    height: 44px;
  }
`;
