import React, { useState } from "react";
import { useHistory } from "react-router";
import "../../assets/styles/deployContract.css";
import styled from "styled-components";
import { Delete, Edit } from "@material-ui/icons";
import DeleteContract from "./deleteContractPopup";
import DeployPopup from "./deployPopup";
import Web3 from "web3";
import { connect } from "react-redux";
import {
  apiBodyMessages,
  apiSuccessConstants,
  validationsMessages,
} from "../../constants";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";
import { handleNavItem } from "../../action";
import { CircularProgress } from "@material-ui/core";

function DeployContract(props) {
  const history = useHistory();
  let obtainHash;
  let contractAdd = "";

  const [open, setOpen] = useState(false);
  const [openDeployPopup, setOpenDeployPopup] = useState(false);
  const [tokenId, setTokenId] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [deployTokenName, setDeployTokenName] = useState("");

  const handleClickOpen = (id, tokenName) => {
    setOpen(true);
    setTokenId(id);
    setTokenName(tokenName);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeployPopup = (deployTokenName) => {
    // saveDraft data coming from addFeatures
    let tokenDetails = props?.saveDraftData;
    setOpenDeployPopup(true);
    setDeployTokenName(deployTokenName);
    sendTransaction(tokenDetails);
  };

  const deployPopupClose = () => {
    setOpenDeployPopup(false);
  };
  const capitalize = (str) => {
    let lowerStr = str.toLowerCase();
    let newtr = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
    return newtr;
  };

  // deploy Token Function :

  let networkVersion = props.userDetails?.accountDetails?.network || "";
  let userAddress = props.userDetails?.accountDetails?.address || "";

  const sendTransaction = async (tokenDetails) => {
    window.web3 = new Web3(window.ethereum);

    let checkNetwork = tokenDetails?.network;
    let draftedTokenId = tokenDetails?.id;
    let draftedTokenOwner = tokenDetails?.tokenOwner;
    let byteCode = tokenDetails?.byteCode;
    let createdToken = tokenDetails?.tokenName;
    let parsingDecimal = tokenDetails?.tokenDecimals;
    let parsingSupply = tokenDetails?.tokenInitialSupply;

    // let xdce_address = tokenDetails.tokenOwner;
    // let contractInstance = new window.web3.eth.Contract(newAbi.abi, xdce_address);

    const priceXdc = 1;
    const gasPrice = await window.web3.eth.getGasPrice();

    let transaction = {
      from: userAddress,
      gas: 7920000,
      gasPrice: gasPrice,
      data: byteCode,
    };

    if (checkNetwork === "XDC Mainnet") {
      await window.web3.eth
        .sendTransaction(transaction)
        .on("transactionHash", function (hash) {
          // console.log("transactionHash ====", hash);
          obtainHash = hash;
          if (hash !== 0) {
            // recieve mainnet contractAddress from this function
            setTimeout(() => {
              contractDetailsFromTxnHash(
                hash,
                parsingDecimal,
                parsingSupply,
                gasPrice,
                createdToken,
                draftedTokenId,
                draftedTokenOwner
              );
            }, 10000);
          }
        })

        .on("error", function (error) {
          let obtainTxnHash = obtainHash;
          let obtainContractAddress = contractAdd;
          if (
            error.message !==
              "Returned error: Error: XDCPay Tx Signature: User denied transaction signature." &&
            contractAdd === ""
          ) {
            history.push({
              pathname: "/created-token",
              state: {},
              parsingDecimal,
              obtainTxnHash,
              obtainContractAddress,
              parsingSupply,
              gasPrice,
              createdToken,
            });
          } else if (
            error.message ===
            "Returned error: Error: XDCPay Tx Signature: User denied transaction signature."
          ) {
            setOpenDeployPopup(false);
          }
          else{
            console.log('')
          }
        });
    } else {
      await window.web3.eth
        .sendTransaction(transaction)
        .on("transactionHash", function (hash) {
          // console.log("transactionHash ====", hash);
        })
        .on("receipt", function (receipt) {
          //receive the contract address from this object
          // console.log("receipt ====", receipt);
          if (receipt !== 0) {
            history.push({
              pathname: "/created-token",
              state: receipt,
              parsingDecimal,
              parsingSupply,
              gasPrice,
              createdToken,
            });
            updateTokenDetails(
              draftedTokenId,
              draftedTokenOwner,
              receipt.contractAddress
            );
          }
        })
        .on("confirmation", function (confirmationNumber, receipt) {
          // console.log("confirmation ====", confirmationNumber, receipt);
        })
        .on("error", function (error) {
          if (error) {
            setOpenDeployPopup(false);
          }
        });
    }
  };

  const updateTokenDetails = async (
    resultedTokenId,
    resultedTokenOwner,
    resultAddress
  ) => {
    let reqObj = {
      tokenId: resultedTokenId,
      tokenOwner: resultedTokenOwner,
      smartContractAddress: resultAddress,
      status: apiBodyMessages.STATUS_DEPLOYED,
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.updateDraftedToken(reqObj)
    );
  };

  const contractDetailsFromTxnHash = async (
    txnHash,
    parsingDecimal,
    parsingSupply,
    gasPrice,
    createdToken,
    tokenId,
    tokenOwner
  ) => {
    let reqObj = {
      hash: txnHash,
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.getTxnHashDetails(reqObj)
    );
    let obtainContractAddress = res?.contractAddress;
    // let obtainTxnHash = res?.hash || "";
    let obtainTxnHash = res?.hash !== undefined ? res?.hash : obtainHash 
    let obtainGasUsed = res?.gasUsed;
     //-------
     contractAdd = res?.contractAddress
    if (contractAdd !== "") {
      history.push({
        pathname: "/created-token",
        state: {},
        obtainTxnHash,
        parsingDecimal,
        parsingSupply,
        gasPrice,
        obtainGasUsed,
        createdToken,
        obtainContractAddress,
      });
      updateTokenDetails(tokenId, tokenOwner, obtainContractAddress);
    }
  };

  const handleEdit = (id) => {
    props.setActiveNavItem("create");
    history.push(`/token-XRC20/${id}`);
  };

  return (
    <Container>
      <Heading>Deploy Saved Tokens</Heading>
      <TableContainer>
        <TableHeader>
          <Title>Token Icon</Title>
          <Title>Token Name</Title>
          <Title>Token Symbol</Title>
          <TitleNetwork>Network</TitleNetwork>
          <Title>Supply</Title>
          <Title>Status</Title>
        </TableHeader>
        <Line />

        <DataContainer>
          {props.state?.isLoading ? (
            <EmptyRow>
              <CircularProgress />
            </EmptyRow>
          ) : (
              props.state.draftFailedXrc20TokenDetails?.length === 0 ? (
                <EmptyRow>No Contracts Available</EmptyRow>
              ) : (
                props.state.draftFailedXrc20TokenDetails &&
                props.state.draftFailedXrc20TokenDetails.map((item, index) => (
              <>
                <TableRow key={index}>
                  <div className="tokenIcon">
                    <TableContentImg
                      alt=""
                      src={
                        item.tokenImage
                          ? item.tokenImage
                          : "/images/XDC_sky_blue.svg"
                      }
                    />
                  </div>
                  <div className="tokenName">
                    <TableContent>{item.tokenName}</TableContent>
                  </div>
                  <div className="tokenSymbol">
                    <TableContent>{item.tokenSymbol}</TableContent>
                  </div>
                  <div className="network">
                    <TableContent>{item.network}</TableContent>
                  </div>
                  <div className="supply">
                    <TableContent>{item.tokenInitialSupply}</TableContent>
                  </div>
                  <div className="status">
                    <TableContent>{capitalize(item.status)}</TableContent>
                  </div>
                  <div className="icons">
                    <div
                      className="deployIcon"
                      onClick={() => handleDeployPopup(item.tokenName)}
                    >
                      <img src="/images/deploy_contract.png" alt="" />
                    </div>
                    <div
                      className="deleteIcon"
                      onClick={() => handleClickOpen(item.id, item.tokenName)}
                    >
                      <Delete />
                    </div>
                    <div
                      onClick={() => handleEdit(item.id)}
                      className="editIcon"
                    >
                      <Edit />
                    </div>
                  </div>
                </TableRow>
                <DataLine />
              </>
            ))
            )
          )}
        </DataContainer>
      </TableContainer>

      <DeleteContract
        open={open}
        onClose={handleClose}
        handleClose={handleClose}
        deleteContract={props.deleteContract}
        tokenId={tokenId}
        tokenName={tokenName}
      />
      <DeployPopup
        networkVersion={networkVersion}
        open={openDeployPopup}
        onClose={deployPopupClose}
        deployPopupClose={deployPopupClose}
        deployTokenName={deployTokenName}
      />
    </Container>
  );
}

// export default DeployContract;
const mapStateToProps = (state) => ({
  userDetails: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  setActiveNavItem: (isActive) => {
    dispatch(handleNavItem(isActive));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeployContract);

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 455px;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const Heading = styled.span`
  margin-top: 37px;
  margin-left: 185px;
  /* width: 236px; */
  height: 34px;
  text-align: left;
  font: normal normal 600 28px/34px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  @media screen and (max-width: 1660px) and (min-width: 1440px) {
    margin-left: 70px;
  }
  @media screen and (max-width: 1440px) and (min-width: 1280px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 1280px) and (min-width: 1024px) {
    margin-left: 20px;
    margin-top: 37px;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    margin-left: 20px;
    margin-top: 94px;
  }
  @media screen and (max-width: 768px) and (min-width: 425px) {
    margin-top: 89px;
    margin-left: 24px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 320px) and (max-width: 425px) {
    margin-top: 89px;
    margin-left: 10px;
    margin-bottom: 20px;
    width: 152px;
    height: 21px;
    font: normal normal 600 18px/21px Inter;
  }
`;
const TableContainer = styled.div`
  margin-top: 34px;
  margin-left: 185px;
  margin-bottom: 46px;
  width: 1300px;
  max-width: 1300px;
  height: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  @media screen and (max-width: 1760px) and (min-width: 1440px) {
    margin-left: 70px;
    width: 1145px;
    max-width: 1145px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 55px;
      max-width: 55px;
      height: 5px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border-radius: 12px;
      opacity: 1;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #c4c4c4;
    }
  }
  @media screen and (max-width: 1440px) and (min-width: 1280px) {
    margin-left: 100px;
    width: 965px;
    max-width: 965px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 55px;
      max-width: 55px;
      height: 5px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border-radius: 12px;
      opacity: 1;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #c4c4c4;
    }
  }
  @media screen and (max-width: 1280px) and (min-width: 1024px) {
    margin-left: 20px;
    width: 968px;
    max-width: 968px;
    overflow-x: scroll;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    margin-left: 20px;
    width: 730px;
    max-width: 730px;
    overflow-x: scroll;
  }
  @media screen and (max-width: 768px) and (min-width: 556px) {
    margin-top: 0px;
    margin-left: 24px;
    width: 720px;
    max-width: 720px;
    height: auto;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 55px;
      height: 5px;
      background: #c4c4c4 0% 0% no-repeat padding-box;
      border-radius: 12px;
      opacity: 1;
    }
  }
  @media screen and (max-width: 556px) and (min-width: 425px) {
    margin-top: 0px;
    margin-left: 24px;
    width: 400px;
    max-width: 400px;
    height: auto;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 55px;
      height: 5px;
      background: #c4c4c4 0% 0% no-repeat padding-box;
      border-radius: 12px;
      opacity: 1;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 425px) {
    margin-top: 0px;
    margin-left: 10px;
    width: 355px;
    height: auto;
    overflow-x: scroll;
  }
`;
const TableHeader = styled.div`
  width: 100%;
  max-width: 1012px;
  display: flex;
  align-items: center;
  margin: 15px 0 0 28px;
`;
const Title = styled.p`
  width: 112px;
  min-width: 112px;
  max-width: 222px;
  height: 20px;
  margin-right: 57px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    font-size: 14px;
  }
`;
const TitleNetwork = styled.p`
  width: 222px;
  min-width: 222px;
  max-width: 222px;
  height: 20px;
  margin-right: 57px;
  padding-left: 20px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #102c78;
  opacity: 1;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    font-size: 14px;
  }
`;
const Line = styled.hr`
  margin: 0.5rem auto 0 14px;
  width: 1270px;
`;
const DataLine = styled.hr`
  margin: 0 auto 0 -14px;
  width: 1270px;
`;
const DataContainer = styled.div`
  margin-left: 28px;
`;
const TableRow = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
`;
const TableContent = styled.span`
  top: 222px;
  left: 593px;
  width: 81px;
  height: 20px;
  text-align: left;
  font: normal normal normal 16px/20px Inter;
  letter-spacing: 0px;
  color: #191919;
  opacity: 1;
  @media screen and (min-width: 375px) and (max-width: 425px) {
    width: 70px;
    height: 17px;
    text-align: left;
    font: normal normal normal 14px/17px Inter;
  }
`;
const TableContentImg = styled.img`
  width: 38px;
  height: 35px;
  opacity: 1;
  border-radius: 50%;
`;
const EmptyRow = styled.div`
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #808080;
`;
