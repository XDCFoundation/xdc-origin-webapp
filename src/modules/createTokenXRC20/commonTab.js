import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import BasicInfoPage from "./basicInformation";
import TokenomicsPage from "./tokenomics";
import AddFeaturesPage from "./addFeature";
import DeployContractPage from "./deployContract";
import { apiBodyMessages, apiSuccessConstants, validationsMessages } from "../../constants";
import Utils from "../../utility";
import { SaveDraftService } from "../../services/index";
import Web3 from 'web3';
import { connect } from 'react-redux';

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
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  width: 224.5px;
  border-bottom: 1px solid #f0f0f0;
  @media (min-width: 767px) and (max-width: 1024px) {
    width: 180.5px;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
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
  color: #4b4b4b;
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

function CommonTab(props) {
  const history = useHistory();

  const tab = [
    {
      id: 1,
      step: "Step 1",
      image: "/images/ContractDetails.svg",
      activeImage: "/images/Contract-Details-Active.svg",
      circleImage: "/images/Selected-Circle.svg",
      image1: "/images/ContractDetails.svg",
      activeImage1: "/images/Contract-Details-Active.svg",
      name: "Basic Information",
    },
    {
      id: 2,
      step: "Step 2",
      image: "/images/Tokenomics.svg",
      activeImage: "/images/Tokenomics-Active.svg",
      circleImage: "/images/Selected-Circle.svg",
      image1: "/images/Tokenomics.svg",
      activeImage1: "/images/Tokenomics-Active.svg",
      name: "Tokenomics",
    },
    {
      id: 3,
      step: "Step 3",
      image: "/images/Features.svg",
      activeImage: "/images/Features-Active.svg",
      circleImage: "/images/Selected-Circle.svg",
      image1: "/images/Features.svg",
      activeImage1: "/images/Features-Active.svg",
      name: "Add Features",
    },
    {
      id: 4,
      step: "Step 4",
      image: "/images/Deploy.svg",
      activeImage: "/images/Deploy-Active.svg",
      circleImage: "/images/Selected-Circle.svg",
      image1: "/images/Deploy.svg",
      activeImage1: "/images/Deploy-Active.svg",
      name: "Deploy Contract",
    },
  ];

  const [arr, setArr] = useState(tab);
  const [step, setStep] = useState(1);

  const [imgData, setImgData] = useState("");
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const toggleUploadPopup = (imageData) => {
    setIsUploadOpen(!isUploadOpen);
    setImgData(imageData);
  };

  //redux data:

  let networkVersion = props.userDetails?.accountDetails?.network || ""
  let userAddress = props.userDetails?.accountDetails?.address || ""

  const initialValues = {
    network: networkVersion,
    tokenOwner: userAddress,
    tokenName: "",
    tokenSymbol: "",
    tokenImage: imgData,
    tokenDecimals: undefined,
    tokenDescription: "",
    tokenInitialSupply: undefined,
    pausable: false,
    mintable: true,
    burnable: true,
  };

  const [tokenData, setTokenData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [saveAndContinue, setSaveAndContinue] = useState(false);

  // capturing all fields value: 

  useEffect(() => {
    setTokenData(props.state?.xrc20TokenDetails)
  }, [props])

  let newImage = imgData.length >=1 ? imgData : tokenData.tokenImage

  const handleChange = (e) => {
    setTokenData({
      ...tokenData,
      network: networkVersion,
      pausable: false,
      tokenOwner: userAddress,
      tokenImage: newImage,
      burnable: true,
      mintable: true,
      [e.target.name]: e.target.value
    }); //destructuring
  };

  // console.log('to---', tokenData)

  // condition checking for nextStep: 

  useEffect(() => {
    // console.log('er--', formErrors)
    if (Object.keys(formErrors).length === 0 && saveAndContinue) {
    }
  }, [formErrors]);


  //form error validations :

  const validate = (values) => {
    const errors = {};

    // if (!values.network) {
    //   errors.network = validationsMessages.VALIDATE_NETWORK;
    // }

    if (!values.tokenName) {
      errors.tokenName = validationsMessages.VALIDATE_TOKEN_NAME_FIELD;
    } else if (values.tokenName.length > 30) {
      errors.tokenName = validationsMessages.VALIDATE_TOKEN_NAME_LIMIT;
    }

    if (!values.tokenSymbol) {
      errors.tokenSymbol = validationsMessages.VALIDATE_TOKEN_SYMBOL_FIELD;
    } else if (values.tokenSymbol.length > 15) {
      errors.tokenSymbol = validationsMessages.VALIDATE_TOKEN_SYMBOL_LIMIT;
    }

    if (!values.tokenImage) {
      errors.tokenImage = validationsMessages.VALIDATE_IMAGE_FIELD;
    }

    if (!values.tokenDecimals) {
      errors.tokenDecimals = validationsMessages.VALIDATE_DECIMAL_FIELD;
    } else if (Number(values.tokenDecimals) < 1) {
      errors.tokenDecimals = validationsMessages.VALIDATE_DECIMAL_MIN_RANGE;
    } else if (Number(values.tokenDecimals) > 18) {
      errors.tokenDecimals = validationsMessages.VALIDATE_DECIMAL_MAX_RANGE;
    } else if (Number(values.tokenDecimals) === 0) {
      errors.tokenDecimals = validationsMessages.VALIDATE_DECIMAL_VALUE;
    }

    if (!values.tokenDescription) {
      errors.tokenDescription = validationsMessages.VALIDATE_DESCRIPTION_FIELD;
    } else if (values.tokenDescription.length > 500) {
      errors.tokenDescription = validationsMessages.VALIDATE_DESCRIPTION_LIMIT;
    }

    return errors;
  };

  // Steps navigation functions : 
  const checkError = () => {
    setFormErrors(validate(tokenData));
    setSaveAndContinue(true);
  }

  const nextStep = (e) => {
    checkError();
    if (Object.keys(formErrors).length === 0 && saveAndContinue === true) {
      let newData = arr.map((item) => {
        return item.id !== step
          ? item
          : { ...item, image: item.circleImage, activeImage: item.circleImage };
      });

      setArr(newData);
      setStep(step + 1);
    }
    else {
      return;
    }
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

  let createdToken = tokenData.tokenName
  let parsingDecimal = Number(tokenData.tokenDecimals);
  let parsingSupply = Number(tokenData.tokenInitialSupply);

  const saveAsDraft = async (e) => {
    // e.preventDefault();
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
    };
    const [err, res] = await Utils.parseResponse(SaveDraftService.saveTokenAsDraft(reqObj));
    // console.log('tr---',res)
    if (res !== 0) {
      sendTransaction(res)
    }
  };

  const saveAsDraftbyEdit = async (e) => {
    // e.preventDefault();
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
    };
    const [err, res] = await Utils.parseResponse(
      SaveDraftService.saveTokenAsDraft(reqObj)
    );
    if (res[0] !== 0) {
      sendTransaction(res[0])
    }
  };


  // function to open xdc pay extension: 

  const sendTransaction = async (tokenDetails) => {
    window.web3 = new Web3(window.ethereum)
    let checkNetwork = tokenDetails?.network
    let draftedTokenId = tokenDetails?.id
    let draftedTokenOwner = tokenDetails?.tokenOwner
    let byteCode = tokenDetails?.byteCode

    // let xdce_address = tokenData.tokenOwner;
    // let contractInstance = new window.web3.eth.Contract(newAbi.abi, xdce_address);

    const priceXdc = 1;
    const gasPrice = await window.web3.eth.getGasPrice();

    let transaction = {
      "from": userAddress,
      "gas": 7920000,
      "gasPrice": gasPrice,
      "data": byteCode
    };

    if (checkNetwork === "XDC Mainnet") {
      await window.web3.eth.sendTransaction(transaction)
        .on('transactionHash', function (hash) {
          // console.log("transactionHash ====", hash);
          if (hash !== 0) {
            // recieve mainnet contractAddress from this function
            contractDetailsFromTxnHash(hash, parsingDecimal, parsingSupply, gasPrice, createdToken,draftedTokenId, draftedTokenOwner) 
          }
        })
        .on('receipt', function (receipt) {
          // console.log("receipt ====", receipt);  
        }
        )
        .on('confirmation', function (confirmationNumber, receipt) {
          // console.log("confirmation ====", confirmationNumber, receipt);
        })
        .on('error', function (error) {
          if (error) {
            prevStep();
          }
        });
    }
    else {
      await window.web3.eth.sendTransaction(transaction)
        .on('transactionHash', function (hash) {
          // console.log("transactionHash ====", hash);
        })
        .on('receipt', function (receipt) { //receive the contract address from this object
          // console.log("receipt ====", receipt);  
          if (receipt !== 0) {
            history.push({ pathname: '/created-token', state: receipt, parsingDecimal, parsingSupply, gasPrice, createdToken })
            updateTokenDetails(draftedTokenId, draftedTokenOwner, receipt.contractAddress)
          }
        }
        )
        .on('confirmation', function (confirmationNumber, receipt) {
          // console.log("confirmation ====", confirmationNumber, receipt);
        })
        .on('error', function (error) {
          if (error) {
            prevStep();
          }
        });
    }
  }

  const updateTokenDetails = async (resultedTokenId, resultedTokenOwner, resultAddress) => {

    let reqObj = {
      tokenId: resultedTokenId,
      tokenOwner: resultedTokenOwner,
      smartContractAddress: resultAddress,
      status: apiBodyMessages.STATUS_DEPLOYED
    };
    const [err, res] = await Utils.parseResponse(SaveDraftService.updateDraftedToken(reqObj));
  }

  const contractDetailsFromTxnHash = async (txnHash, parsingDecimal, parsingSupply, gasPrice, createdToken, tokenId, tokenOwner) => {
    let reqObj = {
      hash: txnHash
    };
    const [err, res] = await Utils.parseResponse(SaveDraftService.getTxnHashDetails(reqObj));
    let obtainContractAddress = res?.contractAddress || ""
    let obtainTxnHash = res?.hash || ""
    let obtainGasUsed = res?.gasUsed || ""
    if (res != 0) {
      history.push({ pathname: '/created-token', state: obtainTxnHash, parsingDecimal, parsingSupply, gasPrice, obtainGasUsed, createdToken, obtainContractAddress })
      updateTokenDetails(tokenId, tokenOwner, obtainContractAddress)
    }
  }

  return (
    <>
      <MainContainer>
        <Parent>
          <Header>Create XRC20 Token</Header>
          <Column>
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
            {(() => {
              switch (step) {
                case 1:
                  return (
                    <BasicInfoPage
                      tokenData={tokenData}
                      formErrors={formErrors}
                      nextStep={nextStep}
                      handleChange={handleChange}
                      isUploadOpen={isUploadOpen}
                      imgData={imgData}
                      toggleUploadPopup={toggleUploadPopup}
                      state={props.state}
                    />
                  );
                case 2:
                  return (
                    <TokenomicsPage
                      tokenData={tokenData}
                      formErrors={formErrors}
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
                      formErrors={formErrors}
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

export default connect(mapStateToProps)(CommonTab);