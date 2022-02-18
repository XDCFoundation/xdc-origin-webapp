import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import BasicInfoPage from "./basicInformation";
import TokenomicsPage from "./tokenomics";
import AddFeaturesPage from "./addFeature";
import DeployContractPage from "./deployContract";
import {
  apiBodyMessages,
  apiSuccessConstants,
  validationsMessages,
  DEFAULT_TOKEN_IMAGE_URL
} from "../../constants";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";
import Web3 from "web3";
import { connect } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {handleNavItem} from "../../action";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  background: #ecf0f7 0% 0% no-repeat padding-box;
  /* height: 1080px; */
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 63px;
  }
`;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  width: 898px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 720px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    width: 355px;
  }
`;

const Header = styled.div`
  text-align: left;
  font: normal normal 600 28px/34px Inter;
  letter-spacing: 0px;
  color: #1f1f1f;
  opacity: 1;
  padding: 20px 0px 0px 0px;
  @media (min-width: 0px) and (max-width: 767px) {
    margin: 63px 0px 0px 0px;
    font: normal normal 600 18px/21px Inter;
  }
`;

const Column = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px;
  opacity: 1;
  margin: 20px 0px 67px 0px;
`;

const RowOne = styled.div`
  display: flex;
  flex-direction: row;
  /* padding: 0 10px; */
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 224.5px;
  border: none;
  /* border-bottom: 1px solid red; */
  @media (min-width: 767px) and (max-width: 1024px) {
    width: 180.5px;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  opacity: 1;
  border-left: 1px solid #f0f0f0;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 38px;
    padding: 0px 10px 0px 13px;
  }
`;

const Img = styled.img`
  display: flex;
  width: 23px;
  height: 24px;
  justify-content: center;
  align-items: center;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 13px 0px 0px 0px;
  text-align: left;
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
`;

const TextOne = styled.div`
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #7b7979;
  opacity: 1;
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;

const ActiveTextOne = styled.div`
  font: normal normal normal 12px/15px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
`;

const TextTwo = styled.div`
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #4b4b4b;
  opacity: 1;
  @media (min-width: 768px) and (max-width: 1024px) {
    white-space: nowrap;
    font: normal normal 600 16px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    display: none;
  }
`;

const ActiveTextTwo = styled.div`
  font: normal normal 600 17px/20px Inter;
  letter-spacing: 0px;
  color: #0089ff;
  opacity: 1;
  @media (min-width: 768px) and (max-width: 1024px) {
    white-space: nowrap;
    font: normal normal 600 16px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    white-space: nowrap;
    font: normal normal 600 15px/20px Inter;
    padding: 0px 10px 0px 0px;
  }
`;

const LineTop = styled.hr`
  width: 864px;
  margin: 0 0 10px 0;
  border-top: 1px solid #f0f0f0;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 323px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 688px;
  }
`;

const LineBottom = styled.hr`
  width: 864px;
  margin-top: 10px;
  border-top: 1px solid #f0f0f0;
  @media (min-width: 0px) and (max-width: 767px) {
    width: 320px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 688px;
  }
`;

function CommonTab(props) {
  const history = useHistory();
  let obtainHash;
  let contractAdd = "";

  const tab = [
    {
      id: 1,
      step: "Step 1",
      image: "/images/ContractDetails.svg",
      activeImage: "/images/Contract-Details-Active.svg",
      circleImage: "/images/tickActive.svg",
      image1: "/images/ContractDetails.svg",
      activeImage1: "/images/Contract-Details-Active.svg",
      name: "Basic Information",
    },
    {
      id: 2,
      step: "Step 2",
      image: "/images/Tokenomics.svg",
      activeImage: "/images/Tokenomics-Active.svg",
      circleImage: "/images/tickActive.svg",
      image1: "/images/Tokenomics.svg",
      activeImage1: "/images/Tokenomics-Active.svg",
      name: "Tokenomics",
    },
    {
      id: 3,
      step: "Step 3",
      image: "/images/Features.svg",
      activeImage: "/images/Features-Active.svg",
      circleImage: "/images/tickActive.svg",
      image1: "/images/Features.svg",
      activeImage1: "/images/Features-Active.svg",
      name: "Add Features",
    },
    {
      id: 4,
      step: "Step 4",
      image: "/images/Deploy.svg",
      activeImage: "/images/Deploy-Active.svg",
      circleImage: "/images/tickActive.svg",
      image1: "/images/Deploy.svg",
      activeImage1: "/images/Deploy-Active.svg",
      name: "Deploy Contract",
    },
  ];

  const [arr, setArr] = useState(tab);
  const [step, setStep] = useState(1);

  const [imgData, setImgData] = useState("");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isVisited, setIsVisited] = useState("");
  const [limit, setLimit] = useState(false);

  const toggleUploadPopup = (imageData) => {
    setIsUploadOpen(!isUploadOpen);
    setImgData(imageData);
  };

  //redux data:

  let networkVersion = props.userDetails?.accountDetails?.network || "";
  let userAddress = props.userDetails?.accountDetails?.address || "";

  const initialValues = {
    network: networkVersion,
    tokenOwner: userAddress,
    tokenName: "",
    tokenSymbol: "",
    tokenImage: imgData ? imgData : DEFAULT_TOKEN_IMAGE_URL,
    tokenDecimals: "18",
    tokenDescription: "",
    tokenInitialSupply: undefined,
    pausable: true,
    mintable: true,
    burnable: true,
    website: "",
    twitter: "",
    telegram: "",
  };

  const [tokenData, setTokenData] = useState(initialValues);

  // capturing all fields value:

  useEffect(() => {
    if (Object.keys(props.state?.xrc20TokenDetails).length !== 0) {
      setTokenData(props.state?.xrc20TokenDetails);
    }
  }, [props]);

  // let newImage = imgData?.length >= 1 ? imgData : tokenData.tokenImage;
  let newImage = imgData?.length >= 1 ? imgData : (tokenData.tokenImage === undefined ? DEFAULT_TOKEN_IMAGE_URL : tokenData.tokenImage);
  let initialDecimalValue = tokenData.tokenDecimals
    ? tokenData.tokenDecimals
    : "18";

  const handleChange = (e) => {
    setIsVisited(e.target.name);
    if (e.target.value !== "fromFeature" && e.target.name === "tokenInitialSupply" && e.target.value.length >= 16) {
      if(limit === false){
        toast.error(validationsMessages.INITIAL_SUPPLY_LIMIT_ERROR, {
          duration: 2000,
          position: validationsMessages.TOASTS_POSITION,
          className: "toast-div-address",
        });
        setLimit(true);
      }
    }
    setTokenData({
      ...tokenData,
      network: networkVersion,
      pausable: e.target.value === "fromFeature" ? e.checked[0].checked : props.state?.xrc20TokenDetails?.pausable ? props.state?.xrc20TokenDetails.pausable : tokenData.pausable,
      tokenOwner: userAddress,
      tokenImage: newImage,
      tokenDecimals: initialDecimalValue,
      burnable: e.target.value === "fromFeature" ? e.checked[1].checked : props.state?.xrc20TokenDetails?.burnable ? props.state?.xrc20TokenDetails.burnable : tokenData.burnable,
      mintable: e.target.value === "fromFeature" ? e.checked[2].checked : props.state?.xrc20TokenDetails?.mintable ? props.state?.xrc20TokenDetails.mintable : tokenData.mintable,
      [e.target.name]: e.target.value,
    }); //destructuring
  };


  // Steps navigation functions :

  const nextStep = (e) => {
    let newData = arr.map((item) => {
      return item.id !== step
        ? item
        : { ...item, image: item.circleImage, activeImage: item.circleImage };
    });

    setArr(newData);
    setStep(step + 1);
  };

  const prevStep = (e) => {
    let newData = arr.map((item) => {
      return item.id !== step - 1
        ? item
        : { ...item, image: item.image1, activeImage: item.activeImage1 };
    });
    setArr(newData);
    setStep(step - 1);
  };

  // condition to check if tokenData object has id key or not, will return true or false
  let hasTokenId = "id" in tokenData;

  // saveDraft api function :

  const notifySuccessMsg = () =>
    toast.success(validationsMessages.TOKEN_SAVED_AS_DRAFT, {
      duration: 4000,
      position: validationsMessages.TOASTS_POSITION,
      className: "toast-div-address",
    });

  const notifyNameErrorMessage = () =>
    toast.error(validationsMessages.TOKEN_NAME_ERROR_MESSAGE, {
      duration: 4000,
      position: validationsMessages.TOASTS_POSITION,
      className: "toast-div-address",
    });

  const notifySymbolErrorMessage = () =>
    toast.error(validationsMessages.TOKEN_SYMBOL_ERROR_MESSAGE, {
      duration: 4000,
      position: validationsMessages.TOASTS_POSITION,
      className: "toast-div-address",
    });

  let createdToken = tokenData.tokenName;
  let parsingDecimal = Number(tokenData.tokenDecimals);
  let parsingSupply = Number(tokenData.tokenInitialSupply);

  const saveAsDraft = async (e) => {
    let reqObj = {
      tokenOwner: tokenData.tokenOwner,
      tokenName: createdToken,
      tokenSymbol: tokenData.tokenSymbol,
      tokenImage: tokenData.tokenImage,
      tokenInitialSupply: parsingSupply,
      tokenDecimals: parsingDecimal,
      tokenDescription: tokenData.tokenDescription,
      network: tokenData.network,
      isBurnable: tokenData.burnable,
      isMintable: tokenData.mintable,
      isPausable: tokenData.pausable,
      website: tokenData.website || "",
      twitter: tokenData.twitter || "",
      telegram: tokenData.telegram || "",
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.saveTokenAsDraft(reqObj)
    );

    if (
      res !== 0 &&
      res !== validationsMessages.TOKEN_SYMBOL_ERROR_MESSAGE &&
      res !== validationsMessages.TOKEN_NAME_ERROR_MESSAGE
    ) {
      notifySuccessMsg();
      sendTransaction(res);
    }
    // else if (res === validationsMessages.TOKEN_NAME_ERROR_MESSAGE) {
    //   notifyNameErrorMessage();
    //   prevStep();
    // } else if (res === validationsMessages.TOKEN_SYMBOL_ERROR_MESSAGE) {
    //   notifySymbolErrorMessage();
    //   prevStep();
    // }
  };

  const saveAsDraftbyEdit = async (e) => {
    let reqObj = {
      id: tokenData.id,
      tokenOwner: tokenData.tokenOwner,
      tokenName: createdToken,
      tokenSymbol: tokenData.tokenSymbol,
      tokenImage: tokenData.tokenImage,
      tokenInitialSupply: parsingSupply,
      tokenDecimals: parsingDecimal,
      tokenDescription: tokenData.tokenDescription,
      network: tokenData.network,
      isBurnable: tokenData.burnable,
      isMintable: tokenData.mintable,
      isPausable: tokenData.pausable,
      website: tokenData.website || "",
      twitter: tokenData.twitter || "",
      telegram: tokenData.telegram || "",
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.saveTokenAsDraft(reqObj)
    );
    if (res[0] !== 0 && res !== undefined) {
      notifySuccessMsg();
      sendTransaction(res[0]);
    }
  };

  // function to open xdc pay extension:

  const sendTransaction = async (tokenDetails) => {
    window.web3 = new Web3(window.ethereum);
    // console.log('token---',tokenDetails)
    let checkNetwork = tokenDetails?.network;
    let draftedTokenId = tokenDetails?.id;
    let draftedTokenOwner = tokenDetails?.tokenOwner;
    let byteCode = tokenDetails?.byteCode;
    let tokenSymbol = tokenDetails?.tokenSymbol;

    // let xdce_address = tokenData.tokenOwner;
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
          // console.log('has---',hash)
          obtainHash = hash
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
                draftedTokenOwner,
                tokenSymbol
              );
            }, 10000);
          }
        })
        .on("error", function (error) {
          let obtainTxnHash = obtainHash
          let obtainContractAddress = contractAdd

          if (error.message !== 'Returned error: Error: XDCPay Tx Signature: User denied transaction signature.' && contractAdd === "") {
            history.push({
              pathname: "/created-token",
              state: {},
              obtainTxnHash,
              obtainContractAddress,
              parsingDecimal,
              parsingSupply,
              gasPrice,
              createdToken,
              tokenSymbol
            });
          } else if(error.message === "Returned error: Error: XDCPay Tx Signature: User denied transaction signature." ) {
            updateTokenDetails(draftedTokenId, draftedTokenOwner, "", apiBodyMessages.STATUS_FAILED);
            // props.dispatchAction(eventConstants.SET_NAV_ITEM, "deploy")
            props.setActiveNavbarItem("deploy")
            history.push("/deploy-contract");
            // prevStep();
          }
          else{
            console.log("");
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
          let newContractAddress = receipt.contractAddress?.replace(
            /0x/,
            "xdc"
          );

          if (receipt !== 0) {
            history.push({
              pathname: "/created-token",
              state: receipt,
              parsingDecimal,
              parsingSupply,
              gasPrice,
              createdToken,
              tokenSymbol
            });
            updateTokenDetails(
              draftedTokenId,
              draftedTokenOwner,
              newContractAddress,
              apiBodyMessages.STATUS_DEPLOYED
            );
          }
        })
        .on("confirmation", function (confirmationNumber, receipt) {})
        .on("error", function (error) {
          if (error) {
            updateTokenDetails(draftedTokenId, draftedTokenOwner, "", apiBodyMessages.STATUS_FAILED);
            // props.dispatchAction(eventConstants.SET_NAV_ITEM, "deploy")
            props.setActiveNavbarItem("deploy")
            history.push("/deploy-contract");
            // prevStep();
          }
        });
    }
  };

  const updateTokenDetails = async (
    resultedTokenId,
    resultedTokenOwner,
    resultAddress,
    status
  ) => {
    let reqObj = {
      tokenId: resultedTokenId,
      tokenOwner: resultedTokenOwner,
      smartContractAddress: resultAddress,
      status: status, //apiBodyMessages.STATUS_DEPLOYED,
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
    tokenOwner,
    tokenSymbol,
  ) => {
    let reqObj = {
      filter: "Transaction",
      data: txnHash,
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.getTxnHashDetails(reqObj)
    );
    let obtainContractAddress = res?.transaction?.contractAddress;
    let obtainTxnHash = res?.transaction?.hash !== undefined ? res?.transaction?.hash : obtainHash
    let obtainGasUsed = res?.transaction?.gasUsed;
    //-------
    contractAdd = res?.transaction?.contractAddress

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
        tokenSymbol
      });
      updateTokenDetails(tokenId, tokenOwner, obtainContractAddress, apiBodyMessages.STATUS_DEPLOYED);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <MainContainer>
        <Parent>
          <Header>Create XRC20 Token</Header>
          <Column>
            <LineTop />
            <RowOne>
              {arr.map((item) => {
                const TextOneActive = step == item.id ? ActiveTextOne : TextOne;
                const TextTwoActive = step == item.id ? ActiveTextTwo : TextTwo;

                return (
                  <>
                    <Div key={item.id}>
                      <ImageDiv id={item.id}>
                        <Img
                          alt=""
                          src={step == item.id ? item.activeImage : item.image}
                        />
                      </ImageDiv>

                      <Description>
                        <TextOneActive id={item.id}>{item.step}</TextOneActive>
                        <TextTwoActive id={item.id}>{item.name}</TextTwoActive>
                      </Description>
                    </Div>
                  </>
                );
              })}
            </RowOne>
            <LineBottom />
            {(() => {
              switch (step) {
                case 1:
                  return (
                    <BasicInfoPage
                      tokenData={tokenData}
                      // formErrors={formErrors}
                      imgData={imgData}
                      nextStep={nextStep}
                      handleChange={handleChange}
                      isUploadOpen={isUploadOpen}
                      imgData={imgData}
                      toggleUploadPopup={toggleUploadPopup}
                      state={props.state}
                      isVisited={isVisited}
                    />
                  );
                case 2:
                  return (
                    <TokenomicsPage
                      tokenData={tokenData}
                      // formErrors={formErrors}
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleChange={handleChange}
                      state={props.state}
                    />
                  );
                case 3:
                  return (
                    <AddFeaturesPage
                      nextStep={nextStep}
                      prevStep={prevStep}
                      tokenData={tokenData}
                      // formErrors={formErrors}
                      saveAsDraft={saveAsDraft}
                      saveAsDraftbyEdit={saveAsDraftbyEdit}
                      sendTransaction={sendTransaction}
                      handleChange={handleChange}
                    />
                  );
                case 4:
                  return (
                    <DeployContractPage
                      networkVersion={networkVersion}
                      hasTokenId={hasTokenId}
                      prevStep={prevStep}
                      saveAsDraft={saveAsDraft}
                      saveAsDraftbyEdit={saveAsDraftbyEdit}
                    />
                  );
                default:
                  return;
              }
            })()}
          </Column>
        </Parent>
      </MainContainer>
    </>
  );
}
const mapStateToProps = (state) => ({
  userDetails: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveNavbarItem: (activeItem) => {
    dispatch(handleNavItem(activeItem))
  },
});

export default connect(mapStateToProps, mapDispatchToProps )(CommonTab);
