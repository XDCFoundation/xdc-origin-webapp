import React, { useState } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip, Fade,createTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const BgContainer = styled.div`
  background-color: #ecf0f7;
  height: 1080px;
  width: 100%;
  background-size: cover;
  padding-top: 4%;
  padding-bottom: 4%;
  @media(min-width: 768px) and (max-width: 1024px){
    padding-top: 12%;
  }
`;

const ParentContainer = styled.div`
  max-width: 688px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  @media (max-width: 768px) {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 6px;
    margin: 0 auto;
    text-align: center;
    padding: 25px;
    margin-top: 77px;
  }
`;

const SuccessTokenIcon = styled.div`
  width: 78px;
  height: 78px;
  opacity: 1;
  margin: 0 auto;
  margin-top: 10%;
  margin-bottom: 8%;
`;

const SuccessTokenText = styled.div`
  overflow-wrap: break-word;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0px;
  color: #1f1f1f;
  font-weight: bold;
  margin: 0 auto;
  opacity: 1;
  margin-bottom: 8%;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 18px;
    letter-spacing: 0px;
    color: #1f1f1f;
    opacity: 1;
    margin-bottom: 8%;
  }
`;

const SuccessTokenDetails = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #f4f4f4;
  padding: 14px;
  font-weight: 600;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8% !important;
  /* margin: auto; */
  @media (max-width: 768px) {
    text-align: center;
    font-weight: 600;
    border-radius: 8px;
    letter-spacing: 0px;
    color: #1f1f1f;
    opacity: 1;
    margin-bottom: 8% !important;
    /* margin: auto; */
  } ;
`;

const SuccessRows = styled.div`
  width: 100%;
  display: flex;
  /* padding: 4px 0px 10px 17px; */
`;

const SuccessTokenKey = styled.span`
  width: 180px;
  white-space: nowrap;
  text-align: left;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media (max-width: 768px) {
    width: 180px;
    text-align: left;
    font-size: 14px;
    font: normal normal medium 14px/17px Inter;
    letter-spacing: 0px;
    color: #1f1f1f;
    opacity: 1;
  }
`;
const KeyInfo = styled.img`
  margin-right: 10px;
  margin-bottom: 3px;
`;

const ValueDiv = styled.div`
  margin-left: 15px;
  width: 60%;
  font-weight: 100;
  margin-top: 3.5px;
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media (max-width: 768px) {
    font: normal normal normal 14px/17px Inter;
    overflow-wrap: anywhere;
  }
`;

const SuccessTokenValues = styled.div`
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0.5px;
  font-family: "sans-serif";
  color: #3163f0;
  opacity: 1;
  margin-top: 3.5px;
  margin-left: 15px;
  cursor: pointer;
  /* text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; */
  @media (max-width: 768px) {
    text-align: left;
    font: normal normal normal 14px/17px Inter;
    letter-spacing: 0px;
    font-family: "sans-serif";
    color: #3163f0;
    opacity: 1;
    word-break: break-all;
  }
`;

const CopyIcon = styled.img`
  margin-left: 8px;
  color: black;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  &:after {
    color: pink;
  }
  @media (max-width: 767px) {
    margin-bottom: 30px ;
  }
`;

const Buttons = styled.div`
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 8%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 8%;
  }
`;

const ButtonAddToXDCPay = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  opacity: 1;
  margin-right: 25px;
  width: 211px;
  height: 50px;
  color: black;
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #d8d8d8;
    border-radius: 4px;
    opacity: 1;
  }
`;

const ButtonManageToken = styled.button`
  background: #3163f0 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border-width: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: 768px) {
    order: 1;
    width: 100%;
    background: #3163f0 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    margin-bottom: 20px;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  text-align: center;
  font: normal normal medium 16px/20px Inter;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
  }
`;
const ButtonIcon = styled.img`
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const ButtonName = styled.div`
  text-align: left;
  font: normal normal medium 18px/21px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (max-width: 768px) {
    text-align: left;
    font: normal normal medium 16px/20px Inter;
    letter-spacing: 0px;
    color: #4b4b4b;
    opacity: 1;
  }
`;

const LineSeparation = styled.hr`
  border-top: 1px solid #f4f4f4;
  width: 100%;
`;


const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "12px",
        color: "#4B4B4B",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 3px 12px #0000001A",
        border: "1px solid #e6e8ed"
      }
    }
  }
});

const defaultTheme = createTheme();

const useStyles = makeStyles(theme => ({
  arrow: {
    "&:before": {
      border: "1px solid #e6e8ed"
    },
    color: theme.palette.common.white
  },
}))

const CreateToken = (props) => {
  const classes = useStyles();

  let gasPrice = Number(props.location.gasPrice);
  let gasFee = (gasPrice * props.location.state.gasUsed) / Math.pow(10, 18);
  let gweiValue = gasPrice / Math.pow(10, 9);
  let transactionAddress =
    props.location?.state?.transactionHash?.slice(0, 28) +
    "..." +
    props.location?.state?.transactionHash?.substr(
      props.location?.state?.transactionHash.length - 4
    );
  let contractAddress = props.location.state.contractAddress.replace(
    /0x/,
    "xdc"
  );
  let newContractAddress =
    contractAddress?.slice(0, 26) +
    "..." +
    contractAddress?.substr(contractAddress.length - 4);

  const [open, setOpen] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);

  const handleTooltipOpen = () => {
    setOpen(true);
    setOpenAddress(false);
  }

  const handleTooltipOpenAddress = () => {
    setOpenAddress(true);
    setOpen(false);
  }

  const handleTransactionHash = () => {
    if (props?.user?.accountDetails?.network === "XDC Mainnet") {
      window.open(`https://explorer.xinfin.network/txs/${props.location?.state?.transactionHash}`, '_blank');
    } else if (props?.user?.accountDetails?.network === "XDC Apothem Testnet") {
      window.open(`https://explorer.apothem.network/txs/${props.location?.state?.transactionHash}`, '_blank');
    }
  }

  const handleContractAddress = () => {
    if (props?.user?.accountDetails?.network === "XDC Mainnet") {
      window.open(`https://explorer.xinfin.network/address/${contractAddress}`, '_blank');
    } else if (props?.user?.accountDetails?.network === "XDC Apothem Testnet") {
      window.open(`https://explorer.apothem.network/address/${contractAddress}`, '_blank');
    }
  }

  return (
    <MuiThemeProvider theme={defaultTheme}>
    <>
      <BgContainer>
        <ParentContainer>
          <SuccessTokenIcon>
            <img src="images/Success.svg"></img>
          </SuccessTokenIcon>
          <SuccessTokenText>
            Successfully Created {props.location.createdToken || ""} Token
          </SuccessTokenText>
          <SuccessTokenDetails>
            <SuccessRows>
              <SuccessTokenKey>
                <MuiThemeProvider theme={theme}>
                  <Tooltip
                      title="Unique transaction identifier, also known as the Transaction ID"
                      placement="top-start"
                      arrow
                      classes={{ arrow: classes.arrow }}
                  >
                    <KeyInfo src="images/Info.svg"></KeyInfo>
                  </Tooltip>
              </MuiThemeProvider>
                Transaction Hash:
              </SuccessTokenKey>
              <SuccessTokenValues onClick={() => handleTransactionHash()}>
                {transactionAddress || ""}
              </SuccessTokenValues>
              <Tooltip
                title={open ? "Copied" : "Copy To Clipboard"}
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <CopyToClipboard
                  text={
                    props.location.state.transactionHash.length > 0
                      ? props.location.state.transactionHash
                      : ""
                  }
                >
                  <CopyIcon src="/images/Copy.svg" onClick={handleTooltipOpen}></CopyIcon>
                </CopyToClipboard>
              </Tooltip>
            </SuccessRows>
            <LineSeparation></LineSeparation>
            <SuccessRows>
                <SuccessTokenKey>
                <MuiThemeProvider theme={theme}>
                  <Tooltip
                      title="The unique address of the contract"
                      placement="top-start"
                      arrow
                      classes={{ arrow: classes.arrow }}
                  >
                    <KeyInfo src="images/Info.svg"></KeyInfo>
                  </Tooltip>
              </MuiThemeProvider>
                Contract Address:
              </SuccessTokenKey>
              <SuccessTokenValues onClick={() => handleContractAddress()}>
                {newContractAddress || ""}
              </SuccessTokenValues>
              <Tooltip
                title={openAddress ? "Copied" : "Copy To Clipboard"}
                placement="top"
                arrow
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
              >
                <CopyToClipboard
                  text={
                    contractAddress.length > 0
                      ? contractAddress
                      : ""
                  }
                >
                  <CopyIcon src="/images/Copy.svg" onClick={handleTooltipOpenAddress}></CopyIcon>
                </CopyToClipboard>
              </Tooltip>
            </SuccessRows>
            <LineSeparation></LineSeparation>
            <SuccessRows>
              <SuccessTokenKey>
              <MuiThemeProvider theme={theme}>
                  <Tooltip
                      title="Number of minted tokens"
                      placement="top-start"
                      arrow
                      classes={{ arrow: classes.arrow }}
                  >
                    <KeyInfo src="images/Info.svg"></KeyInfo>
                  </Tooltip>
              </MuiThemeProvider>
                Tokens Minted:
              </SuccessTokenKey>
              <ValueDiv>{props.location.parsingSupply || ""}</ValueDiv>
            </SuccessRows>
            <LineSeparation></LineSeparation>
            <SuccessRows>
              <SuccessTokenKey>
              <MuiThemeProvider theme={theme}>
                  <Tooltip
                      title="The value being transacted in XDC and fiat value"
                      placement="top-start"
                      arrow
                      classes={{ arrow: classes.arrow }}
                  >
                    <KeyInfo src="images/Info.svg"></KeyInfo>
                  </Tooltip>
              </MuiThemeProvider>
                Gas Fee:
              </SuccessTokenKey>
              <ValueDiv>
                {gasFee + " " + "XDC" + "" + "(" + gweiValue + " " + "Gwei)"}
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
            {/* <ButtonManageToken>
              <ButtonContent>
                Manage Token
                <ButtonIcon src="images/Button_Next_Arrow.svg"></ButtonIcon>
              </ButtonContent>
            </ButtonManageToken> */}
          </Buttons>
        </ParentContainer>
      </BgContainer>
      </>
    </MuiThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(CreateToken);
