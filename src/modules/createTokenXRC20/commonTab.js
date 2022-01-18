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

  //redux data:

  let networkVersion = props.userDetails?.accountDetails?.network || ""
  let userAddress = props.userDetails?.accountDetails?.address || ""

  const initialValues = {
    network: networkVersion,
    tokenOwner: userAddress,
    tokenName: "",
    tokenSymbol: "",
    tokenImage: "tokenImage20",
    decimals: null,
    description: "",
    tokenSupply: null,
    pausable: false,
    mintable: true,
    burnable: true,
  };

  const [tokenData, setTokenData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [saveAndContinue, setSaveAndContinue] = useState(false);

  // capturing all fields value: 

  const handleChange = (e) => {
    setTokenData({ ...tokenData, [e.target.name]: e.target.value }); //destructuring
    // console.log("form---", tokenData);
  };

  // condition checking for nextStep: 

  useEffect(() => {
    // console.log("er--", formErrors);
    if (Object.keys(formErrors).length === 0 && saveAndContinue) {
      // console.log("val---", tokenData);
    }
  }, [formErrors]);


  //form error validations :

  const validate = (values) => {
    const errors = {};

    if (!values.network) {
      errors.network = validationsMessages.VALIDATE_NETWORK;
    }

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

    if (!values.decimals) {
      errors.decimals = validationsMessages.VALIDATE_DECIMAL_FIELD;
    } else if (Number(values.decimals) < 1) {
      errors.decimals = validationsMessages.VALIDATE_DECIMAL_MIN_RANGE;
    } else if (Number(values.decimals) > 18) {
      errors.decimals = validationsMessages.VALIDATE_DECIMAL_MAX_RANGE;
    } else if (Number(values.decimals) === 0) {
      errors.decimals = validationsMessages.VALIDATE_DECIMAL_VALUE;
    }

    if (!values.description) {
      errors.description = validationsMessages.VALIDATE_DESCRIPTION_FIELD;
    } else if (values.description.length > 500) {
      errors.description = validationsMessages.VALIDATE_DESCRIPTION_LIMIT;
    }

    return errors;
  };


  // Steps navigation functions : 

  const nextStep = (e) => {
    setFormErrors(validate(tokenData));
    setSaveAndContinue(true);

    if (Object.keys(formErrors).length === 0 && saveAndContinue === true) {
      let newData = arr.map((item) => {
        return item.id !== step
          ? item
          : { ...item, image: item.circleImage, activeImage: item.circleImage };
      });

      setArr(newData);
      setStep(step + 1);
    } else {
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

  // saveDraft api function : 

  let createdToken = tokenData.tokenName
  let parsingDecimal = Number(tokenData.decimals);
  let parsingSupply = Number(tokenData.tokenSupply);

  const saveAsDraft = async (e) => {
    e.preventDefault();
    let reqObj = {
      tokenOwner: tokenData.tokenOwner,
      tokenName: createdToken,
      tokenSymbol: tokenData.tokenSymbol,
      tokenImage: tokenData.tokenImage,
      tokenInitialSupply: parsingSupply,
      tokenDecimals: parsingDecimal,
      tokenDescription: tokenData.description,
      network: tokenData.network,
      isBurnable: tokenData.burnable,
      isMintable: tokenData.mintable,
      isPausable: tokenData.pausable,
    };

    const [err, res] = await Utils.parseResponse(SaveDraftService.saveTokenAsDraft(reqObj));
    // console.log('res---', res)
    if (res !== 0) {
      // Utils.apiSuccessToast(apiSuccessConstants.DRAFTED_DATA_SUCCESS);
      sendTransaction(res)
    }
  };


  // function to open xdc pay extension: 

  const sendTransaction = async (tokenDetails) => {
    window.web3 = new Web3(window.ethereum)
    let draftedTokenId = tokenDetails?.id
    let draftedTokenOwner = tokenDetails?.tokenOwner

    let xdce_address = tokenData.tokenOwner;

    let newAbi = {
      "abi": [
        {
          "constant": true,
          "inputs": [
            {
              "name": "tweetId",
              "type": "uint256"
            }
          ],
          "name": "getTweetByTweetId",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": false,
          "inputs": [
            {
              "name": "tweetId",
              "type": "uint256"
            },
            {
              "name": "tweet",
              "type": "string"
            }
          ],
          "name": "createTweet",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getCount",
          "outputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "tweets",
          "outputs": [
            {
              "name": "",
              "type": "string"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ]
    }

    let contractInstance = new window.web3.eth.Contract(newAbi.abi, xdce_address);

    const priceXdc = 1;
    const gasPrice = await window.web3.eth.getGasPrice();

    let transaction = {
      "from": userAddress,
      "gas": 415800000,
      "gasPrice": gasPrice,
      "data": contractInstance.methods.createTweet(132435363634737 + "", 132435363634737 + " :@#: " + "text" + " :@#: " + "authorId" + " :@#: " + "createdAt").encodeABI()
    };
    // myContract.methods.createTweet(id + "", id + " :@#: " + text + " :@#: " + authorId + " :@#: " + createdAt); need to know the definition of this function from Deepak or anyhow.
    // contractInstance.deploy({})


    await window.web3.eth.sendTransaction(transaction)
      .on('transactionHash', function (hash) {
        // console.log("transactionHash ====", hash);
      })
      .on('receipt', function (receipt) {
        console.log("receipt ====", receipt); //receive the contract address from this object
        if (receipt !== 0) {
          history.push({ pathname: '/created-token', state: receipt, parsingDecimal, parsingSupply, gasPrice, createdToken })
          updateTokenDetails(draftedTokenId, draftedTokenOwner, receipt.contractAddress)
        }
      })
      .on('confirmation', function (confirmationNumber, receipt) {
        // console.log("confirmation ====", confirmationNumber, receipt);
      })
  }

  const updateTokenDetails = async (resultedTokenId, resultedTokenOwner, resultAddress) => {
    let reqObj = {
      tokenId: resultedTokenId,
      tokenOwner: resultedTokenOwner,
      smartContractAddress: resultAddress,
      status: apiBodyMessages.STATUS_DEPLOYED
    };
    const [err, res] = await Utils.parseResponse(SaveDraftService.updateDraftedToken(reqObj));
    // console.log('up---', res)
    // if (res !== 0) {
    //   Utils.apiSuccessToast(apiSuccessConstants.UPDATE_DATA_SUCCESS);
    // }
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
                      sendTransaction={sendTransaction}
                      handleChange={handleChange}
                    />
                  );
                case 4:
                  return <DeployContractPage />;
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