import React, { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import Web3 from "web3";
import { connect } from "react-redux";
import {
  apiBodyMessages,
  apiSuccessConstants,
  validationsMessages,
} from "../../constants";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";

const DialogContainer = styled.div`
  width: 466px;
  height: 210px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;
const LoaderSection = styled.div`
  width: 466px;
  height: 215px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;
const LoaderSectionThird = styled.div`
  width: 466px;
  height: 315px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
`;
const SecondHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 0 0 35px 0;
`;
const TextDiv = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const PauseText = styled.span`
  font: normal normal normal 20px/24px Inter;
  letter-spacing: 0px;
  color: #101010;
  opacity: 1;
`;
const ConfirmDiv = styled.span`
  width: 374px;
  height: 17px;
`;
const ConfirmText = styled.span`
  text-align: center;
  font: normal normal normal 14px/17px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
`;
const ThirdHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 50px 0 46px 0;
`;
const Img = styled.img`
  width: 78px;
  height: 78px;
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

function ResumeContract(props) {
  const classes = useStyles();
  const [confirmResume, setConfirmResume] = useState(false);
  const [steps, setSteps] = useState(1);

  let contractAddress = props?.deployedContract?.smartContractAddress?.replace(
    /xdc/,
    "0x"
  );

  let networkVersion = props.userDetails?.accountDetails?.network || "";
  let userAddress = props.userDetails?.accountDetails?.address || "";

  const handleSteps = () => {
    setSteps(2);
    sendTransaction();
  };

  // function to open xdc pay extension:

  const sendTransaction = async () => {
    window.web3 = new Web3(window.ethereum);

    let newAbi = props?.deployedContract?.contractAbiString;
    let jsonAbi = JSON.parse(newAbi);

    let contractInstance = new window.web3.eth.Contract(
      jsonAbi,
      contractAddress
    );

    const gasPrice = await window.web3.eth.getGasPrice();

    let transaction = {
      from: userAddress,
      to: contractAddress, //contractAddress of the concerned token (same in data below)
      gas: 7920000,
      gasPrice: gasPrice,
      data: contractInstance.methods.unpause().encodeABI(),
      //value given by user should be multiplied by 1000
    };

    if (networkVersion === "XDC Mainnet") {
      await window.web3.eth
        .sendTransaction(transaction)
        .on("transactionHash", function (hash) {
          // console.log("transactionHash ====", hash);
          // setTimeout(() => {
          //   pauseXRC20Token();
          //   setSteps(3);
          // }, 15000);
        })
        .on("receipt", function (receipt) {
          // console.log("receipt ====", receipt);
        })
        .on("confirmation", function (confirmationNumber, receipt) {})
        .on("error", function (error) {
          // console.error("error error error error ====", error);
          if(error.message.includes("transaction receipt")){ //the transaction is successful
            pauseXRC20Token();
            setSteps(3);
          }
        });
    } else {
      await window.web3.eth
        .sendTransaction(transaction)
        .on("transactionHash", function (hash) {})
        .on("receipt", function (receipt) {
          //receive the contract address from this object
          // console.log("receipt ====", receipt);
          if (receipt !== 0) {
            pauseXRC20Token();
            setSteps(3);
          }
        })
        .on("confirmation", function (confirmationNumber, receipt) {})
        .on("error", function (error) {
          if (error) {
            props.handleClose("resume")
          }
        });
    }
  };

  const pauseXRC20Token = async () => {
    let reqObj = {
      tokenOwner: props?.deployedContract?.tokenOwner,
      tokenId: props?.deployedContract?.id,
      pause: false,
      network: networkVersion,
      smartContractAddress: props?.deployedContract?.smartContractAddress,
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.pauseResumeXRC20Token(reqObj)
    );
    if (res !== 0 && res !== undefined) {
      // console.log('res--', res)
      setConfirmResume(true);
      // props.handleClose("pause", true)
    }
  }

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

        {(() => {
          switch (steps) {
            case 1:
              return (
                <>
                  <DialogContainer>
                    <DialogHeader>
                      <DeleteText>Resume Contract</DeleteText>
                      <CrossIcon
                        onClick={() =>
                          props.handleClose("resume", confirmResume)
                        }
                        src="/images/Cross.svg"
                        alt=""
                      />
                    </DialogHeader>
                    <Line />
                    <Header>
                      Do you want to resume the {props.tokenName}
                      <br /> Contract? All transactions will be allowed again.
                    </Header>
                    <ButtonContainer>
                      <CancelButton
                        onClick={() =>
                          props.handleClose("resume", confirmResume)
                        }
                      >
                        Cancel
                      </CancelButton>
                      <ResumeButton onClick={handleSteps}>Resume</ResumeButton>
                    </ButtonContainer>
                  </DialogContainer>
                </>
              );
            case 2:
              return (
                <>
                  <LoaderSection>
                    <DialogHeader>
                      <DeleteText>Resume Contract</DeleteText>
                      <CrossIcon
                        onClick={props.handleClose}
                        src="/images/Cross.svg"
                        alt=""
                      />
                    </DialogHeader>
                    <Line />
                    <SecondHeader>
                      <CircularProgress />
                    </SecondHeader>
                    <TextDiv>
                      <PauseText>Resuming Contract</PauseText>
                      <ConfirmDiv>
                        <ConfirmText>
                          Confirm this transaction on XDCPay
                        </ConfirmText>
                      </ConfirmDiv>
                    </TextDiv>
                  </LoaderSection>
                </>
              );
            case 3:
              return (
                <>
                  <LoaderSectionThird>
                    <DialogHeader>
                      <DeleteText>Resume Contract</DeleteText>
                      <CrossIcon
                        onClick={() => props.handleClose("pause",confirmResume)}
                        src="/images/Cross.svg"
                        alt=""
                      />
                    </DialogHeader>
                    <Line />
                    <ThirdHeader>
                      <Img src="/images/Selected-Circle.svg" />
                    </ThirdHeader>
                    <TextDiv>
                      <PauseText>Contract Resume</PauseText>
                      <ConfirmDiv>
                        <ConfirmText>
                          Paused the contract to stop transactions
                        </ConfirmText>
                      </ConfirmDiv>
                    </TextDiv>
                  </LoaderSectionThird>
                </>
              );
            default:
              return;
          }
        })()}
      </Dialog>
    </>
  );
}
const mapStateToProps = (state) => ({
  userDetails: state.user,
});

export default connect(mapStateToProps)(ResumeContract);
